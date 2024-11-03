import { z } from "zod";

import { insertChatsSchema } from "./db/schemas/chats";

export type SuccessResponse<T = void> = {
  success: true;
  message: string;
} & (T extends void ? {} : { data: T });

export type ErrorResponse = {
  success: false;
  error: string;
  isFormError?: boolean;
};

export const createChatSchema = insertChatsSchema.omit({
  //   userId: true,
  createdAt: true,
  id: true,
});

export type CreateChat = z.infer<typeof createChatSchema>;
