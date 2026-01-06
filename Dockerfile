FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app

COPY --from=builder /app/package*.json ./
RUN npm ci --only=production

COPY --from=builder /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=80
EXPOSE 80

CMD ["npx", "astro", "preview", "--port", "80", "--host", "--allowed-hosts"]
