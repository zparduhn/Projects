angular.module('carFire').controller('carCtrl', function($scope, carRef, commentsRef, $firebaseObject, $firebaseArray){
  $scope.cars = $firebaseArray(carRef);
});
