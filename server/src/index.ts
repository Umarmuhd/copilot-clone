import { drizzle } from "drizzle-orm/neon-serverless";
import { serve } from "@hono/node-server";
import { Pool } from "@neondatabase/serverless";
import { Hono } from "hono";
import { logger } from "hono/logger";
import { chats } from "./db/schema.js";
import { chatsRouter } from "./routes/chats.js";

export type Env = {
  DATABASE_URL: string;
};

export const app = new Hono<{ Bindings: Env }>();

app.use("*", logger());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

const apiRoutes = app.basePath("/api").route("/chats", chatsRouter);

// app.get("*", serveStatic({ root: "./frontend/dist" }));
// app.get("*", serveStatic({ path: "./frontend/dist/index.html" }));

export default app;
export type ApiRoutes = typeof apiRoutes;

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
