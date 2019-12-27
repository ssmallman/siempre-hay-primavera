FROM node:current

USER node:node
RUN mkdir -p /home/node/api-server
WORKDIR /home/node/api-server

# Source files
COPY --chown=node:node src ./src

# Build files
COPY --chown=node:node .babelrc ./
COPY --chown=node:node gulpfile.babel.js ./
COPY --chown=node:node package.json ./
COPY --chown=node:node package-lock.json ./

RUN npm install

EXPOSE 8080
CMD ["npm", "start"]