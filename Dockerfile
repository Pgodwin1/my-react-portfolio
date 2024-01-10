# Development Stage
FROM node:18-alpine as development

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

CMD ["yarn", "dev"]

# Production Stage
FROM node:18-alpine as production

ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn install --only=production 

COPY --from=development /app/dist ./dist

EXPOSE 5174

CMD ["yarn", "start"]
