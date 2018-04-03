# Load Node with tag argon
FROM node:6.9.1

# create a folder /app
RUN mkdir /app
RUN mkdir /app/logs

# similar to cd /app. User /app folder as workdir
WORKDIR /app

# copy file package.json to folder /app
COPY package.json /app

# Run npm install to load node modules
RUN npm install

# This will copy other files like index.js into /app folder
COPY . /app

# Expose only 3005 port to outside world
EXPOSE 80

# set Env Variables
ENV NODE_ENV production
ENV LOG_LEVEL verbose
ENV LOG_FILE_PATH /app/logs/dt.app.log
ENV API_PORT 1337
ENV MANAM_DB_URL mongodb://127.0.0.1:47017/desitalkies
ENV SESSION_DB_HOST 127.0.0.1
ENV SESSION_DB_PORT 47017
ENV SESSION_DB dtLocalSession
ENV PUBSUB_DB_HOST 127.0.0.1
ENV PUBSUB_DB_PORT 6379
ENV PUBSUB_DB dtLcoalMem
ENV SESSION_SECRET P7NNKXN72G3HBFEVJCZS6QTNW3WOZLO0WRRONPR39U27Z7GK9F54NK7HT445

# This will trigger node app to start
CMD ["npm","start"]
