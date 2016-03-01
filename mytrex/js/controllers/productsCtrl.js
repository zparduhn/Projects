angular.module('mytrex').controller('productsCtrl', function($scope, service, $timeout){


  //$scope.test = "it Works";
  $scope.mxdLine = "hidden";
  $scope.mxdDetails = "hidden";
  $scope.mxd3gLine = "hidden";
  $scope.mxd3gDetails = "hidden";
  $scope.showLine = function(){
    if ($scope.mxdLine === "hidden"){
      $scope.mxdLine = "show";
      $scope.mxd3gLine = "hidden";
      $scope.mxd3gDetails = "hidden";
      $scope.clickMore = "hidden";
      $scope.mxdDetails = "show animated bounceInUp";
    }
    else{
      $scope.mxdLine = "hidden";
      $scope.mxdDetails = "hidden";
      $scope.mxd3gLine = "hidden";
      $scope.mxd3gDetails = "hidden";
      $scope.clickMore = "hidden";
    }
  };
  $scope.showLine3g = function(){
    if ($scope.mxd3gLine === "hidden"){
      $scope.mxd3gLine = "show";
      $scope.mxdLine = "hidden";
      $scope.mxdDetails = "hidden";
      $scope.clickMore = "hidden";
      $scope.mxd3gDetails = "show animated bounceInUp";
    }
    else{
      $scope.mxd3gLine = "hidden";
      $scope.mxd3gDetails = "hidden";
      $scope.mxdLine = "hidden";
      $scope.mxdDetails = "hidden";
      $scope.clickMore = "hidden";
    }
  };
});
