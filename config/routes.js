module.exports.routes = {
  '/': {
    view: 'homepage',
    layout: false,
  },
  'POST /account/signup': 'AuthController.getKulfySignUp',
  'POST /account/login/facebook': 'AuthController.getFacebookLogin',
  'POST /account/login/google': 'AuthController.getGoogleLogin',
  'POST /account/logout': 'AuthController.getUserLogout',
  'POST /account/checkToken': 'AuthController.getCheckToken'

};
