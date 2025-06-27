ARG NODE_VERSION=22.17
ARG DEBIAN_VERSION=bullseye-slim

ARG RUNNER_IMAGE="node:${NODE_VERSION}-${DEBIAN_VERSION}"

FROM ${RUNNER_IMAGE} as runner

WORKDIR /app

COPY .next .next
COPY public public
COPY node_modules node_modules
COPY package.json .

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", ".next/standalone/server.js"]