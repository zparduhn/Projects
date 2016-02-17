myApp.controller('controller', function($scope, myService){
  //$scope.test = "This still works";
$scope.reallyLike = myService.reallyLike;
$scope.kindOfLike = myService.kindOfLike;

$scope.addArtist = function(){
  var artist = buildArtist();
  myService.addNewArtist(artist);
  removeArtist();
};

  function buildArtist(){
    return{
      name: $scope.name,
      genre: $scope.genre,
      score: $scope.score
    };
  }
  function removeArtist(){
      $scope.name = "";
      $scope.genre = "";
      $scope.score = "";
  }


});
