import { pgTable, serial, text, doublePrecision } from "drizzle-orm/pg-core";
import { numeric, index, timestamp, date } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const chats = pgTable(
  "chats",
  {
    id: serial("id").primaryKey(),
    userId: text("user_id").notNull(),
    content: text("content").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (expenses) => {
    return {
      userIdIndex: index("name_idx").on(expenses.userId),
    };
  }
);

// Schema for inserting a user - can be used to validate API requests
export const insertChatsSchema = createInsertSchema(chats, {
  userId: z.string().min(3, { message: "" }),
  content: z.string().min(3, { message: "" }),
});
// Schema for selecting a Expenses - can be used to validate API responses
export const selectChatsSchema = createSelectSchema(chats);
