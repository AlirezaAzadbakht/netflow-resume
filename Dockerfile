# ------------------------------
# Builder stage
# ------------------------------
FROM docker.arvancloud.ir/library/node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install --verbose --registry="https://package-mirror.liara.ir/repository/npm/"

COPY . .

ARG SHOW_TEAM=true
ENV SHOW_TEAM=$SHOW_TEAM

RUN npm run build


# ------------------------------
# Production stage
# ------------------------------
FROM docker.arvancloud.ir/library/node:20-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup -g 1001 nextjs && adduser -u 1001 -G nextjs -s /bin/sh -D nextjs

COPY --from=builder --chown=nextjs:nextjs /app/.next/standalone ./

COPY --from=builder --chown=nextjs:nextjs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nextjs /app/public ./public

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]