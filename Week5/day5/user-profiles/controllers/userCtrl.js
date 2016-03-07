var users = [
    {
        name: 'a',
        password: 'a',
        friends: ['Lindsey Mayer', 'Terri Ruff']
    },
    {
        name: 'Preston McNeil',
        password: 'password1',
        friends: ['Lindsey Mayer', 'Terri Ruff']
    },
    {
        name: 'Ryan Rasmussen',
        password: '$akgfl#',
        friends: ['Lindsey Mayer']
    },
    {
        name: 'Terri Ruff',
        password: 'hunter2',
        friends: ['Lindsey Mayer', 'Preston McNeil']
    },
    {
        name: 'Lindsey Mayer',
        password: '777mittens777',
        friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
    }
];

module.exports = {
    login: function(req, res, next) {
        var found = false;
        //console.log(req.body.name, req.body.password);
    for (var i = 0; i <= users.length-1; i++) {
      if(req.body.name === users[i].name && req.body.password === users[i].password){
        found = true;
        req.session.currentUser= users[i];
        res.send({userFound: true});
      }
    }
    if(found === false){
        res.send({userFound: false});
        }
    },

};
