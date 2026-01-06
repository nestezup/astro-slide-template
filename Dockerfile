FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
RUN mv /usr/share/nginx/html/pages/* /usr/share/nginx/html/ && rm -rf /usr/share/nginx/html/pages

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
