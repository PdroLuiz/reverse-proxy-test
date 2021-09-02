FROM node:latest 

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY ./ .


EXPOSE 3334

CMD ["node", "server.js"]