console.log(`Using ${process.env.NODE_ENV} development environment`);

module.exports = {
  models: {
    connection: 'dtMongoServer',
    migrate: 'safe',
    autoCreatedAt: true,
    autoUpdatedAt: true,
  },

  port: 1337,
  environment: 'development',

  connections: {
    localDiskDb: {
      adapter: 'sails-disk',
    },
    dtMongoServer: {
      adapter: 'sails-mongo',
      host: 'localhost',
      port: 27017,
      database: 'desi-talkies',
    },
  },
};
