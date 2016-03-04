var express = require('express');
var bodyParser = require('body-parser');

var UserController = require('./controllers/userController.js');

var app  = express();
app.use(bodyParser.json());//Is Middleware app.use without a route will run on every request that comes in. If you add a route it will only do it on that route.
// There is a next() in the bodyParser code. 
app.use(function(req, res, next){
  console.log('body: ', req.body);
  console.log('params: ', req.params);
  console.log('query: ', req.query);
  next();//Gets us from one Middleware to the next. Next only needs to be called when the function in invoked.
});

app.get('/users', UserController.index);
app.get('/users/:idx', UserController.show);
app.post('/users', UserController.create);
app.put('/users/:idx', UserController.update);
app.delete('/users/:idx', UserController.destroy);

app.listen(3000, function(){
  console.log('Listening on port 3000');
});

//Inside the () is a port number

// Create - Post -
// Read  - Get
// Update - Put/Patch
// Delete/Destroy - Delete

// End Points
// 1) Create or build /collectionName
// 2) index /collection
// 3) Show  /collection/:id
// 4) Update /collection/:id
// 5) Destroy /collection/:id

















// req = {
//   header: {
//     "Content-Type" : "application/json"
//   }
//   {
//     "body" : "hello world"
//   }
// }
// });
