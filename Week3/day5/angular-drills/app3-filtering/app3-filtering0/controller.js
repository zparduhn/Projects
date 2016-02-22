angular.module('app3').controller('controller', function($scope, service){
  //$scope.test = 'This is working';

  $scope.list = service.getData();

});
