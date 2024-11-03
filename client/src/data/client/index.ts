import type { CreateChatInput } from "@/types";
import { HttpClient } from "./http-client";
import { API_ENDPOINTS } from "./endpoints";

class Client {
  chats = {
    create: (input: CreateChatInput) =>
      HttpClient.post<unknown>(API_ENDPOINTS.CHATS, input),
    me: () => {
      return HttpClient.get<unknown>(API_ENDPOINTS.CHATS);
    },
  };
}

export default new Client();
