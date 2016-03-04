var me = {
  name : "Zach Parduhn",
  location: "Herriman",
  occupations:["Web Developement", "Production Manager"],
  hobbies:[
      {
        "name" : "Being Active",
        "type" : "past"
      },
      {
        "name" : "Playing Destiny",
        "type" : "current"
      },
      {
        "name" : "Snowboarding",
        "type" : "past"
      },
    ],
    skillz : [
      {
        "id": 1,
        "name": "Javascript",
        "experience": "Intermediate"
      },
      {
        "id": 2,
        "name": "CSS",
        "experience": "Intermediate"
      },
      {
        "id": 3,
        "name": "HTML5",
        "experience": "Intermediate"
      },
    ]
};

module.exports = {
  getSkillz : function(req, res, next){
    res.status(200).send({skillz: me.skillz});
  },
  getName : function(req, res, next){
    res.status(200).send({name: me.name});
  },
  getLocation : function(req, res, next){
    res.status(200).send({location: me.location});
  },
  getOccupations : function(req, res, next){
    res.status(200).send({occupations: me.occupations});
  },
  getOccupationsLatest : function(req, res, next){
    res.status(200).send({latestOccupation : me.occupations[0]});
  },
  getHobbies : function(req, res, next){
    res.status(200).send({hobbies : me.hobbies});
  },
  getHobbiesType : function(req, res, next){
    console.log(req.params);
    type = req.params.type;
    ary = [];
    me.hobbies.forEach(function (obj){
      if(type === obj.type){
        ary.push(obj.name);
      }
    }
    );
    res.status(200).send(ary);
  },
  changeName : function(req, res, next){
    // var newName = parseInt(req.params.name);
    me.name = req.body.name;
    res.status(200).json(me.name);
  },
  changeLocation: function(req, res, next){
    me.location = req.body.location;
    res.status(200).json(me.location);
  },
  addHobbies: function(req, res, next){
    me.hobbies.push(req.body);
    res.status(200).json(me.hobbies[me.hobbies.length -1]);
  },
  addOccupation: function(req, res, next){
    me.occupations.push(req.body);
    res.status(200).json(me.occupations[me.occupations.length -1]);
  },
  addSkillz: function(req, res, next){
    console.log(req.body);
    me.skillz.push(req.body);
    res.status(200).json(me.skillz[me.skillz.length -1]);
  },
  generateId : function(req, res, next){
    var length = me.skillz.length + 1;
    req.body.id = length;
    next();
  }

};
