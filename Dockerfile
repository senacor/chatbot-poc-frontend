FROM node:20-alpine as builder

WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.24-alpine
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/openai-chatbot-angular/browser /usr/share/nginx/html
