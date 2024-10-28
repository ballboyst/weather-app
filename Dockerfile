FROM node:20.12.2-bullseye-slim

ENV NODE_ENV=development

WORKDIR /app
COPY . /app/
