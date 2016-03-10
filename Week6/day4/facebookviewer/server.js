var express = require('express');
var session = require('express-session');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var keys = require('./keys.js');
var app = express();

app.use(session({secret: 'some-other-random-string'}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new FacebookStrategy({
  clientID: keys.facebook_clientId,
  clientSecret: keys.facebook_secret,
  callbackURL: 'http://localhost:3000/auth/facebook/callback'
}, function(token, refreshToken, profile, done) {
  return done(null, profile);
}));

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/me',
    failureRedirect: '/login'
  }
));

passport.serializeUser(function(user, done){
  done(null, user);
})
passport.deserializeUser(function(obj, done){
  done(null, obj);
})

app.get('/me', function(req, res){
    res.send(req.user);
})

app.listen('3000', function(){
  console.log('listening on port 3000');
})
