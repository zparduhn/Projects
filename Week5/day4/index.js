var express = require('express'),
    bodyParser = require('body-parser');

var app  = express();
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');


app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/secrets/:username/:pin', middleware.verifyUser);

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getOccupationsLatest);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesType);
app.get('/skillz', mainCtrl.getSkillz);

app.put('/name', mainCtrl.changeName);
app.put('/location', mainCtrl.changeLocation);
app.post('/hobbies', mainCtrl.addHobbies);
app.post('/occupations', mainCtrl.addOccupation);
app.post('/skillz', mainCtrl.generateId, mainCtrl.addSkillz);

app.listen(8888, function(){
  console.log('Listening on port 3000');
});
