# STAGE 1

FROM node:12-alpine AS build

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . .

RUN npm run build 

# STAGE 2

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html