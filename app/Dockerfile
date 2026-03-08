FROM node:20-alpine AS base
WORKDIR /app

# Dependencies
FROM base AS deps
COPY package.json ./
RUN npm install

# Build
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN mkdir -p public
COPY --from=builder /app/.next/standalone/ ./

EXPOSE 3000
ENV PORT=3000

CMD ["node", "server.js"]
