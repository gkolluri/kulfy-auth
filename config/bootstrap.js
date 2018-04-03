/* global sails */
console.log('bootstrap');
module.exports.bootstrap = function (cb) {
  sails.models.theaters.native((err, theaters) => {
    theaters.ensureIndex({ theater_coordinates: '2dsphere' }, cb());
  });
};
