FROM node:20.14.0-alpine AS dev
LABEL authors="Boris"


RUN mkdir /project
WORKDIR /project

COPY . .

RUN npm install

CMD ["npm", "run", "dev"]

FROM node:20.14.0-alpine AS prod


RUN mkdir /project
WORKDIR /project

COPY . .

RUN npm install

CMD ["npm", "run", "build"]

FROM nginx:stable-alpine as deploy

COPY --from=prod /project/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]