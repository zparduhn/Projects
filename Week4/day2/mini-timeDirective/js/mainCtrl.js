angular.module('timeApp').controller('mainCtrl', function($scope){
  $scope.name = "Zach";
  $scope.format = "medium";

  $scope.updateFormat = function(){
    if($scope.ctrlformat === "medium"){
      $scope.ctrlformat = "short";
    }
    else {
        $scope.ctrlformat = "medium";
    }
  };
  
});
