# Build stage
FROM oven/bun:1-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* yarn.lock* ./

# Install dependencies with bun
RUN bun install --frozen-lockfile

# Copy source files
COPY . .

# Build the app
RUN bun run build

# Production stage
FROM nginx:alpine

# Install curl for health check
RUN apk add --no-cache curl

# Copy built files from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Health check - verify nginx is serving content
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD curl -f http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
