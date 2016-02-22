angular.module('apiApp').controller('controller', function($scope, service){

  $scope.list = null;
  $scope.getPokemon = function(){
    console.log($scope.pokemonText);
    service.getData($scope.pokemonText).then(function(response){
      $scope.list = response;
    });
  };

});
