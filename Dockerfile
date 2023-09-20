FROM node:17-alpine3.15 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:1.23.2-alpine

COPY --from=builder /app/build /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000 

CMD ["nginx", "-g", "daemon off;"]