angular.module('apiApp').service('service', function($http, $q){
    var baseURL = 'http://swapi.co/api/';

    this.getData = function(){
        var later = $q.defer();
        $http({
            method: 'GET',
            url: baseURL + "starships/"
        }).then(function(response){
            later.resolve(response.data);
        });
        return later.promise;
    };

});
