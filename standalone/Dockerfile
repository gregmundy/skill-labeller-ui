#from https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
FROM node:8.6

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

RUN npm install --unsafe-perm -g @angular/cli

# Bundle app source
COPY . .

EXPOSE 4200
CMD [ "ng", "serve", "--host", "0.0.0.0"]
