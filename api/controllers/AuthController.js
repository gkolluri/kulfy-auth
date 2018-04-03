/* global sails, Concepts */

module.exports = {
  getKulfySignUp(req, res) {

     let username = req.body.username;
      let password = req.body.password;
      let provider = req.body.provider;

    console.log('Username '+username);
    console.log('password '+password);
    console.log('provider '+provider);

  },
  getFacebookLogin(req, res) {

    let token = req.body.access_token;
    console.log(token);

    const resData = {
            product: 'Kulfy App',
            version: 1,
            result: 'success'
          };
    
    res.json(resData);
  },
  getGoogleLogin(req, res) {

    let token = req.body.access_token;
    console.log(token);

    const resData = {
            product: 'Kulfy App',
            version: 1,
            result: 'success'
          };
    
    res.json(resData);
  },
  getUserLogout(req, res) {

    let token = req.body.access_token;
    console.log(token);

    const resData = {
            product: 'Kulfy App',
            version: 1,
            result: 'success'
          };
    
    res.json(resData);
  },
  getCheckToken(req, res) {
    let token = req.body.access_token;
    console.log(token);

    const resData = {
            product: 'Kulfy App',
            version: 1,
            result: 'success'
          };
    
    res.json(resData);
  },
};

