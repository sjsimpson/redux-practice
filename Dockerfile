# Choose node version and create app directory in Docker image
FROM node:latest
WORKDIR /usr/src/app

# Copy package.json over and install all dependencies
COPY package*.json ./
RUN npm install

# Copy entire app over to Docker image
COPY . ./
RUN npm run build

EXPOSE 80
CMD ["npm", "start"]