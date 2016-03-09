angular.module('ecommerce').controller('controller', function($scope, service){


  $scope.getProducts = function(){
    service.getProducts().then(function(response){
      $scope.products = response;
    });
  };
  $scope.addProduct = function(item, description, price){
    var newObject = {"name": item, "description": description, "price": price};
    //console.log(newObject);
    service.addProduct(newObject).then(function(response){
      alert("Product Added");
      $scope.item = "";
      $scope.price = "";
      $scope.description = "";
      $scope.getProducts();
    });
  };
  $scope.deleteProduct = function(product){
    service.deleteProduct(product).then(function(response){
      alert(product + " deleted");
      $scope.getProducts();
    });
    //alert(product);
  };

  $scope.editProduct = function(id, newProduct, newDescription, newPrice){
    var obj = {_id: id, name: newProduct, description: newDescription, price: newPrice};
    service.editProduct(obj).then(function(data){
      //console.log();
      alert(data.name +" was succesfully edited");
      $scope.getProducts();
    });
  };

  $scope.showEdit = function(){
      $scope.show.button = true;
  };
  $scope.getProducts();
});
