app.controller('homeCtrl', function($scope, profileService) {
  $scope.myProfile = profileService.checkForProfile();
  $scope.sortOptions = [
    {
      display: 'Ascending',
      value: false
    },
    {
      display: 'Descending',
      value: true
    }
  ];
  $scope.editing = false;

  $scope.saveProfile = function(){
    var profile = creatProfile();
    profileService.saveProfile(profile);
    $scope.editing = false;

  };

  function creatProfile(){
    return{
      name: $scope.myProfile.name,
      likes: $scope.myProfile.likes,
      color: $scope.myProfile.color
    };
  }

  $scope.deleteProfile = function(){
    profileService.deleteProfile();
    $scope.myProfile = profileService.checkForProfile();
  };

});
