var express = require('express'),
    app = express()
    , bodyParser = require('body-parser')
    , _ = require('lodash')
    , session = require('express-session')
    , config = require('./config/config.js')
    , port = 8888;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({secret:config.server.secret}));



app.listen(port, function(){
  console.log('Listening on port', port);
});
