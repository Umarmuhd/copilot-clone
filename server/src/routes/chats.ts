import { zValidator } from "@hono/zod-validator";

// import { db } from "../db";
import { chats } from "../db/schema";
import { eq, desc, sum, and } from "drizzle-orm";

import { createChatSchema, type SuccessResponse } from "../types";
import { app } from "..";
import { Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";

export const chatsRouter = app
  .post("/", zValidator("json", createChatSchema), async (c) => {
    const { content, userId } = c.req.valid("json");
    const client = new Pool({ connectionString: c.env.DATABASE_URL });

    const db = drizzle(client);
    const [result] = await db
      .insert(chats)
      .values({
        userId: userId,
        content,
      })
      .returning({ id: chats.id });
    return c.json<SuccessResponse<{ chatId: number }>>(
      {
        success: true,
        message: "Post created",
        data: { chatId: result.id },
      },
      201
    );
  })
  .get("/", async (c) => {
    try {
      const client = new Pool({ connectionString: c.env.DATABASE_URL });

      const db = drizzle(client);

      const result = await db.select().from(chats);

      return c.json({
        result,
      });
    } catch (error) {
      console.log(error);
      return c.json(
        {
          error,
        },
        400
      );
    }
  });
