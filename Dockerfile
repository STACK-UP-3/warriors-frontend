# pull official base image
FROM node:12

# set working directory
WORKDIR /app

# add `/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

# add app
COPY . .

#Expose the app
EXPOSE 3000
#Build
RUN npm run build:prod

# start app
CMD ["npm", "start"]
