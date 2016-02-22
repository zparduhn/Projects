angular.module('arrayApp').controller('arrayController', function($scope, service){

  $scope.list = service.getData();

});
