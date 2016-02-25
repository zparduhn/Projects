angular.module('mytrex').controller('documentsCtrl', function($scope, service){

  console.log($scope.documents = service.getDocuments());

});
