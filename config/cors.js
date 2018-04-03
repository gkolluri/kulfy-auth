console.log('cors');
module.exports.cors = {

  allRoutes: true, // false,

  origin: '*',

  credentials: true,

  methods: 'GET, POST, PUT, DELETE, OPTIONS, HEAD',

  headers: 'content-type, authorization',

};

