/* global sails, Accesslogs */
const ObjectID = require('sails-mongo').mongo.objectId; //require('bson').ObjectID;

//exclude url's like AWS Health check
const log_exception_urls = ['/health/check'];

module.exports = {
  apianalytics: {
    dontLogParams: ['password'],

    // When request starts
    onRequest: function onRequest(log, req, res) {
      sails.log.info(`Requested :: ${req._tag} ${req.ip} ${req.method} ${req.url} ${res.statusCode} ${res.get('X-Response-Time')} ${req.headers['user-agent']}`);
    },

    // When request is done
    onResponse: function onResponse(log, req, res) {
      console.log('Recording API Access Log');
			if(log_exception_urls.indexOf(req.url) === -1) {
				Accesslogs.create({
					tag: res._tag,
					client_id: req.ip,
					method: req.method,
					url: req.url,
					status: res.statusCode,
					responsetime: res.get('X-Response-Time'),
					ua: req.headers['user-agent'],
					user: req.body ? new ObjectID(req.body.__user_id) : '',
					params: req.allParams(),
					headers: req.headers
				}).then((log) => {
					sails.log.info("::", JSON.stringify(log));
				});
			}
    },
  },
};
