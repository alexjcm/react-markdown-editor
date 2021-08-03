FROM node:14-alpine

WORKDIR /markdown-editor
COPY package*.json ./
RUN npm install
#To bundle your app’s source code inside the Docker image:
COPY . .

EXPOSE 3000
CMD ["yarn", "start"]