import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { cors } from "hono/cors";
import { HTTPException } from "hono/http-exception";
import { logger } from "hono/logger";

import { chatsRouter } from "./routes/chats.js";
import type { ErrorResponse } from "./types.js";

const app = new Hono();

app.use("*", logger());

app.use("*", cors(), async (c, next) => {
  return next();
});

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

const apiRoutes = app.basePath("/api").route("/chats", chatsRouter);

app.onError((err, c) => {
  if (err instanceof HTTPException) {
    const errResponse =
      err.res ??
      c.json<ErrorResponse>(
        {
          success: false,
          error: err.message,
          isFormError:
            err.cause && typeof err.cause === "object" && "form" in err.cause
              ? err.cause.form === true
              : false,
        },
        err.status,
      );
    return errResponse;
  }

  return c.json<ErrorResponse>(
    {
      success: false,
      error:
        process.env.NODE_ENV === "production"
          ? "Interal Server Error"
          : (err.stack ?? err.message),
    },
    500,
  );
});

app.get("*", serveStatic({ root: "./client/dist" }));
app.get("*", serveStatic({ path: "./client/dist/index.html" }));

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

export default {
  port: process.env["PORT"] || 3000,
  hostname: "0.0.0.0",
  fetch: app.fetch,
};

console.log("Server Running on port", process.env["PORT"] || 3000);
export type ApiRoutes = typeof apiRoutes;
