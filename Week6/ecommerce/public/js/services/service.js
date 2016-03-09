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
    this.deleteProduct = function(product){
        return $http ({
            method:  'DELETE',
            url: 'http://localhost:3000/products/' + product,
        }).then(function(response){
            return response;
        });
    };
    this.editProduct = function(obj){
        var id = obj._id;
        //console.log(id);
        var newObj = {name: obj.name, description: obj.description, price: obj.price};
        return $http ({
            method:  'PUT',
            url: 'http://localhost:3000/products/'+ id,
            data: newObj
        }).then(function(response){
            // /console.log(response);
            return response.data;
        });
    };
});
