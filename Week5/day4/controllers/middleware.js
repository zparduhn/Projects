module.exports = {
    addHeaders: function(req, res, next) {
    res.status(200).set({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'X-XSS-Protection': '1; mode=block',
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    });
    next();
  },
    verifyUser: function(req, res, next) {
      var userName = 'zach';
      var pin = '1234';
      if(req.params.pin === pin && req.params.username === userName){
        res.status(200).json('congrats');
      }
    next('You are terrible');
  },

};
