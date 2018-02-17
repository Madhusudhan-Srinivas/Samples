FROM node:8.9.4
WORKDIR /app
COPY package-lock.json /app
RUN npm install
COPY . /app
CMD node app.js
EXPOSE 8811