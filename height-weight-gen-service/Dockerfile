FROM node:latest 

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY ./ .

EXPOSE 3333

CMD ["node", "server.js"]