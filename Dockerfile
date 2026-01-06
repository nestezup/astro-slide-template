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
ENV PORT=14321
EXPOSE 14321

CMD ["npm", "run", "preview"]
