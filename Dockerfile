FROM node:14
WORKDIR /usr/src/app
COPY package*.json app.js utils ./
RUN npm install
EXPOSE 3000
CMD ["node", "app.js"]