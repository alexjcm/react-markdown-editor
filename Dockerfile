FROM node:14-alpine

# Create app directory
WORKDIR /markdown-editor

# Install app dependencies
COPY package*.json ./
RUN npm install

#To bundle your app’s source code inside the Docker image:
COPY . .

EXPOSE 3000
CMD ["yarn", "start"]