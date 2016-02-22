angular.module('apiApp').service('service', function($http, $q){

    this.getData = function(pokemon){
    var deferred = $q.defer();
    $http({
    method: 'GET',
    url: 'http://pokeapi.co/api/v2/pokemon/'+pokemon
    }).then(function(response){
        return deferred.resolve(response.data);
    });
    return deferred.promise;
    };

});
