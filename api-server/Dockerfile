FROM node:current
WORKDIR /data/api-server

COPY config.js ./
COPY package.json ./
COPY package-lock.json ./
COPY server.js ./

RUN npm install

CMD ["npm", "start"]