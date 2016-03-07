angular.module('userProfiles')
.factory('friendService', function( $http ) {
  return {

    login: function( user ) {
       return $http({
        method: 'POST',
        url: 'http://localhost:8999/api/login',
        data: user
      });
    },
    getFriends: function() {
       return $http({
        method: 'GET',
        url: 'http://localhost:8999/api/profiles'
      }).then(function(response){
        return response.data;
      });
    }
  };
});
