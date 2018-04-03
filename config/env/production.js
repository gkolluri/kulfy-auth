const winston = require('winston');

const logger = new winston.Logger({
  transports: [
    new (winston.transports.File)({
      level: process.env.LOG_LEVEL,
      filename: process.env.LOG_FILE_PATH,
      colorize: false,
      json: true,
      stringify: true,
      timestamp: true,
    }),
    new (winston.transports.Console)(),
  ],
});

console.log(`Using ${process.env.NODE_ENV}  production environment`);

module.exports = {
  port: process.env.API_PORT,
  environment: process.env.NODE_ENV,
  hookTimeout: 40000,
  connections: {
    mongo: {
      adapter: 'sails-mongo',
      url: process.env.MANAM_DB_URL,
      poolSize: 5,
      socketOptions: {
        noDelay: true,
        cconnectTimeoutMS: 0,
        socketTimeoutMS: 0,
      },
    },
  },

  models: {
    connection: 'mongo',
    migrate: 'safe',
    autoCreatedAt: true,
    autoUpdatedAt: true,
  },
  log: {
    level: process.env.LOG_LEVEL,
    custom: logger,
  },
  session: {
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },

    adapter: 'redis',

    host: process.env.SESSION_DB_HOST,
    port: process.env.SESSION_DB_PORT,
    ttl: 84000,
    db: process.env.SESSION_DB,
    prefix: 'sess:',
    cacheTimeout: 60 * 60,
  },
};
