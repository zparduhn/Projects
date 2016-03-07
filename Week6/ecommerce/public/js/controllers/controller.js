angular.module('ecommerce').controller('controller', function($scope, service){
  $scope.getProducts = function(){
    service.getProducts().then(function(response){
      $scope.products = response;
    });
  };
  $scope.addProduct = function(item, price){
    var newObject = {"name": item, "cost": price};
    service.addProduct(newObject).then(function(response){
      alert(response);
      $scope.item = "";
      $scope.price = "";
      $scope.getProducts();
    });
  };
});
