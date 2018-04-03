const co = require('co');
const Promise = require('bluebird');
const redis = require('redis');
const client = redis.createClient({host:sails.config.session.host, port: sails.config.session.port});
Promise.promisifyAll(redis.RedisClient.prototype);

Promise.promisifyAll(redis.Multi.prototype);

module.exports = function (req, res, next) {

  return co(function*() {
    console.log('checking cache: req params:', req.url.toLowerCase(),req.query, req.query['Cache-Control'], (req.query['Cache-Control'] !== undefined) );

    if(req.query['Cache-Control'] !== undefined) {
      return next();
    }
    let cacheRes = yield client.getAsync(`HTTP:REQUEST:${req.url.toLowerCase()}`);

    // console.log('cacheRes retrieved: ', cacheRes);

    if (!cacheRes) {
      return next();
    }

    res.json(JSON.parse(cacheRes));
  });
};
