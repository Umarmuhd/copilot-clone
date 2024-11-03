import { Hono } from "hono";

import { zValidator } from "@hono/zod-validator";

import { db } from "../db";
import { chats } from "../db/schemas/chats";
import { createChatSchema, type SuccessResponse } from "../types";

export const chatsRouter = new Hono()
  .post("/", zValidator("json", createChatSchema), async (c) => {
    const { content, userId } = c.req.valid("json");

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
      201,
    );
  })
  .get("/", async (c) => {
    try {
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
        400,
      );
    }
  });
