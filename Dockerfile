FROM node:14
WORKDIR /usr/src/app
COPY package*.json app.js ./
ADD utils ./utils/
RUN npm install
EXPOSE 8080
CMD ["node", "app.js"]
