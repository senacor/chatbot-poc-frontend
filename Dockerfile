FROM node:20-alpine as builder

WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
ARG PROFILE
ENV PROFILE $PROFILE
RUN npm run build:${PROFILE}


FROM nginx:1.24-alpine AS production
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/openai-chatbot-angular/browser /usr/share/nginx/html
