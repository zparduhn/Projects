app.service('profileService', function($http) {
  var baseUrl = "http://connections.devmounta.in/";

  this.saveProfile = function(profile) {
    //localStorage.setItem('profile', JSON.stringify(profile));
    return $http({
      method: 'POST', // Request method.
      url: baseUrl + 'api/profiles/', // URL we are making the request to.
      data: profile // The data we are requesting be posted.
    }).then(function(profileResponse) { // What to do after a response comes back from the server.
      //console.log(profileResponse); //A check to see what the server is sending back
      localStorage.setItem('profileId', JSON.stringify({ profileId: profileResponse.data._id })); // Save our unique _id to local storage
      })
      .catch(function(err) {
        console.error(err);
      });
  };

  this.checkForProfile = function(profileId) {
  // if (localStorage.getItem('profile')) {
  //   return JSON.parse(localStorage.getItem('profile'));
  // }
  // return {
  //   //friends: [{name: 'Ryan'}, {name: 'Bryan'}, {name: 'Sarah'}, {name: 'Zac'}, {name: 'Erin'}]
  // };
    return $http({
     method: 'GET',
     url: baseUrl + 'api/profiles/' + profileId
   });
};

  this.deleteProfile = function(){
    var profileId = JSON.parse(localStorage.getItem('profileId')).profileId;

    return $http({
      method: 'DELETE',
      url: baseUrl + 'api/profiles/' + profileId
    });
  };

});
