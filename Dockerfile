# ┌──────────────────────────────────────────────────────────┐
# │ Stage 1: Install dependencies & build the Next.js app  │
# └──────────────────────────────────────────────────────────┘
FROM node:22-alpine AS builder

# 1. Set working directory
WORKDIR /app

# 2. Copy dependency definitions
COPY package.json package-lock.json ./

# 3. Install dependencies
RUN npm ci

# 4. Copy application code
COPY . .

# 5. Declare build-time arguments
ARG NEXT_PUBLIC_API_URL
ARG SERVER_API_URL

# 6. Expose them as build-time environment variables
#    so that `next build` will bake them into the output
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
ENV SERVER_API_URL=${SERVER_API_URL}

# 7. Build the Next.js application
RUN npm run build

# ┌──────────────────────────────────────────────────────────┐
# │ Stage 2: Create the minimal production image          │
# └──────────────────────────────────────────────────────────┘
FROM node:22-alpine AS runner

WORKDIR /app

# 8. Only production dependencies
ENV NODE_ENV=production

# 9. Copy output and necessary files from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.mjs ./next.config.mjs

# 10. Expose default Next.js port
EXPOSE 3000

# 11. Launch the app
CMD ["npm", "start"]
