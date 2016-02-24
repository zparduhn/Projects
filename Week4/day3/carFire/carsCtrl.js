angular.module('carFire').controller('carsCtrl', function($scope, $firebaseArray, carsRef){
  $scope.cars = $firebaseArray(carsRef);
  //
  // $scope.sendComments = function (){
  //   $scope.comments.$add({
  //     text: $scope.newComment,
  //     timestamp: new Date().getTime()
  //   });
  //   $scope.newComment = '';
  // };

});
