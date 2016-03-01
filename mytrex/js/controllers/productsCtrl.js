angular.module('mytrex').controller('productsCtrl', function($scope, service, $timeout){


  //$scope.test = "it Works";
  $scope.mxdLine = "hidden";
  $scope.mxdDetails = "hidden";
  $scope.mxd3gLine = "hidden";
  $scope.mxd3gDetails = "hidden";
  $scope.myaaLine = "hidden";
  $scope.myaaDetails = "hidden";
  //MXD
  $scope.showLine = function(){
    if ($scope.mxdLine === "hidden"){
      $scope.mxdLine = "show";
      $scope.mxd3gLine = "hidden";
      $scope.mxd3gDetails = "hidden";
      $scope.myaaLine = "hidden";
      $scope.myaaDetails = "hidden";
      $scope.clickMore = "hidden";
      $scope.mxdDetails = "show animated bounceInUp";
    }
    else{
      $scope.mxdLine = "hidden";
      $scope.mxdDetails = "hidden";
      $scope.mxd3gLine = "hidden";
      $scope.mxd3gDetails = "hidden";
      $scope.myaaLine = "hidden";
      $scope.myaaDetails = "hidden";
      $scope.clickMore = "show";
    }
  };
  //3G
  $scope.showLine3g = function(){
    if ($scope.mxd3gLine === "hidden"){
      $scope.mxd3gLine = "show";
      $scope.mxdLine = "hidden";
      $scope.mxdDetails = "hidden";
      $scope.myaaLine = "hidden";
      $scope.myaaDetails = "hidden";
      $scope.clickMore = "hidden";
      $scope.mxd3gDetails = "show animated bounceInUp";
    }
    else{
      $scope.mxd3gLine = "hidden";
      $scope.mxd3gDetails = "hidden";
      $scope.mxdLine = "hidden";
      $scope.mxdDetails = "hidden";
      $scope.myaaLine = "hidden";
      $scope.myaaDetails = "hidden";
      $scope.clickMore = "show";
    }
  };
  //MYAA
  $scope.showMyaa = function(){
    if ($scope.myaaLine === "hidden"){
      $scope.myaaLine = "show";
      $scope.mxdLine = "hidden";
      $scope.mxdDetails = "hidden";
      $scope.mxd3gLine = "hidden";
      $scope.mxd3gDetails = "hidden";
      $scope.clickMore = "hidden";
      $scope.myaaDetails = "show animated bounceInUp";
    }
    else{
      $scope.myaaLine = "hidden";
      $scope.myaaDetails = "hidden";
      $scope.mxd3gLine = "hidden";
      $scope.mxd3gDetails = "hidden";
      $scope.mxdLine = "hidden";
      $scope.mxdDetails = "hidden";
      $scope.clickMore = "show";
    }
  };
  //Product functions
  $scope.detailsView = "hidden";
  $scope.specsView = "hidden";
  $scope.specsTab = "";
  $scope.detailsTab = "";
  $scope.overViewTab = "active";
  $scope.showDetails = function(view){
    if(view === 'overView'){
      $scope.detailsView = "hidden";
      $scope.specsView = "hidden";
      $scope.specsTab = "";
      $scope.detailsTab = "";
      $scope.overViewTab = "active";
      $scope.overViewView = "show";
    }
    else if(view === 'details'){
      $scope.specsView = "hidden";
      $scope.overViewView = "hidden";
      $scope.overViewTab = "";
      $scope.specsTab = "";
      $scope.detailsTab = "active";
      $scope.detailsView = "show";
    }
    else if(view === 'specs'){
      $scope.overViewView = "hidden";
      $scope.detailsView = "hidden";
      $scope.overViewTab = "";
      $scope.detailsTab = "";
      $scope.specsTab = "active";
      $scope.specsView = "show";
    }
  };
});
