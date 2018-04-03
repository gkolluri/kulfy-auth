console.log('http');

const cuid = require('cuid');

module.exports.http = {
  middleware: {
    order: [
      'responseTimeLogger',
      'startRequestTimer',
      'tagRequest',
      'cookieParser',
      'session',
      'myRequestLogger',
      'bodyParser',
      'handleBodyParserError',
      'compress',
      'keepAlive',
      'headerParser',
      'methodOverride',
      'poweredBy',
      'handlePoweredBy',
      '$custom',
      'router',
      'www',
      'favicon',
      '404',
      '500',
    ],

    /**
     * Tag each request and response objects of a specific HTTP Request for easy log analysis
     * Using CUID which will be unique generic id across scalable infrastructure.
     *
     * @param req
     * @param res
     * @param next
     */
    tagRequest(req, res, next) {
      req._tag = res._tag = cuid();
      next();
    },

    /**
     * This middleware will ensure timer to start for X-Response-Time
     *
     * @param req
     * @param res
     * @param next
     */
    responseTimeLogger(req, res, next) {
      //  req.on("end", function () {
      //    sails.log.info("Requested :: ", req.ip, req.method, req.url, res.statusCode, res.get('X-Response-Time'), req.headers['user-agent']);
      //  });
      require('response-time')()(req, res, next);
    },

    /**
     * Middleware for setting Connection: keep-alive to all responses
     */
    keepAlive: (req, res, next) => {
      res.set('Connection', 'keep-alive');
      next();
    },

    /**
     * Check if there is access_token,
     * Decode and read user data and set it to body data
     *
     *
     * @param req
     * @param res
     * @param next
     * @returns {*}
     */
    headerParser(req, res, next) {
      // const user = getIdFromToken(req.headers);
      // if (user !== 'undefined' && user !== null) {
      //   if (typeof req.body === 'undefined')
      //     req.body = {};
      //   req.body.__user_id = decryptAccessToken(user.key).id;
      // }
      return next();
    },

    /**
     * Override Powered By header from Sails to Ghost avoid disclosing server info
     *
     * @param req
     * @param res
     * @param next
     */
    handlePoweredBy(req, res, next) {
      res.set('X-Powered-By', 'Ghost');
      next();
    },

    // bodyParser: require('skipper')

  },
};
