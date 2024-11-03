# syntax=docker/dockerfile:1.7-labs
ARG BUN_VERSION=1.1.30
FROM oven/bun:${BUN_VERSION}-slim as base

LABEL fly_launch_runtime="Bun"

WORKDIR /usr/src/app

FROM base AS install
RUN mkdir -p /temp/prod/server
COPY package.json bun.lockb /temp/prod/server/
RUN cd /temp/prod/server && bun install --frozen-lockfile --production

RUN mkdir -p /temp/prod/client
COPY client/bun.lockb client/package.json /temp/prod/client/
RUN cd /temp/prod/client && bun install --frozen-lockfile

FROM base as build
COPY . .
COPY --from=install /temp/prod/server/node_modules node_modules
COPY --from=install /temp/prod/client/node_modules client/node_modules
ENV NODE_ENV=production
ENV VITE_API_URL=copilot-clone.railway.internal/api
RUN cd client && bun run build

FROM base as release
COPY --from=install /temp/prod/server/node_modules node_modules
COPY --exclude=client --from=build /usr/src/app .
COPY --from=build /usr/src/app/client/dist ./client/dist

USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "start" ]