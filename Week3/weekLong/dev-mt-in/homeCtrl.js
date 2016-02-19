app.controller('homeCtrl', function($scope, profileService, friendService) {
  //$scope.myProfile = profileService.checkForProfile();

  $scope.checkForProfile = function() {
    var profileId = JSON.parse(localStorage.getItem('profileId'));

    if (profileId) {
      profileService.checkForProfile(profileId.profileId)
      .then(function(profile) {
        $scope.myProfile = profile.data;
      })
      .catch(function(err) {
        console.error(err);
      });
    }
  };
  $scope.checkForProfile();


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
    profileService.deleteProfile()
    .then(function(deletedProfile) {
      localStorage.removeItem('profileId');
      $scope.myProfile = {};
    })
    .catch(function(err) {
      console.error(err);
    });
  };

  $scope.findFriends = function( query ) {
		friendService.findFriends($scope.myProfile._id, query)
			.then(function( potentialFriends ) {
				$scope.potentialFriends = potentialFriends;
			})
			.catch(function( err ) {
				return console.error(err);
			});
	};

  $scope.addFriend = function( friendId ) {
		friendService.addFriend($scope.myProfile._id, friendId)
			.then(function( profile ) {
				$scope.checkForProfile();
			})
			.catch(function( err ) {
				return console.error(err);
			});
	};

  $scope.removeFriend = function( friendId ) {
		friendService.removeFriend($scope.myProfile._id, friendId)
			.then(function( profile ) {
				$scope.checkForProfile();
			})
			.catch(function( err ) {
				console.error(err);
			});
	};




});
