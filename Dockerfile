FROM node:12-slim

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn --production

COPY . ./

RUN yarn run build

CMD [ "npm", "start" ]
