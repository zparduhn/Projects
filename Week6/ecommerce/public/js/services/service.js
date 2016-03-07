angular.module('ecommerce').service('service', function($http){

this.getProducts = function(){
        return $http({
          method: 'GET',
          url: 'http://localhost:3000/products'
        }).then(function(response){
          return response.data;
        });
    };
this.addProduct = function(newObject){
    return $http({
        method: 'POST',
        url: 'http://localhost:3000/products',
        data: newObject
    }).then(function(response){
        return response;
    });
};
});
