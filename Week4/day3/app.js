angular.module("russianRoulette", ['firebase'])
  .controller('mainCtrl', function ($scope, $firebaseObject, firebaseService) {
    var ref = firebaseService.getRootRef();
    $scope.game = $firebaseObject(ref.child('game'));
    $scope.pullTrigger = function() {
      var index = $scope.game.currentChamber;
      if ($scope.game.chambers[index] === true) {
        youDied();
      } else {
        incrementChamber();
      }
    };
    $scope.createNewGame = function() {
      $scope.game.chambers = [];
      $scope.game.currentChamber = 0;
      $scope.game.deadPerson = false;
      var bullet = Math.floor(Math.random() * 6);
      for (var i = 0; i < 6; i++) {
        if(i === bullet) {
          $scope.game.chambers.push(true);
        }
        else {
          $scope.game.chambers.push(false);
        }
      }
      $scope.game.$save();
    };
    function youDied () {
      alert('BOOM! You died!');
      $scope.game.deadPerson = true;
      $scope.game.$save();
    }
    function incrementChamber () {
      $scope.game.currentChamber++;
      $scope.game.$save();
    }
  })
  .controller("chatCtrl", function($scope, firebaseService, $firebaseArray) {
    var ref = firebaseService.getRootRef().child('chatroom');
    var chats = $firebaseArray(ref);
    $scope.chats = chats;
    $scope.sendNewChat = function () {
      $scope.chats.$add({text: $scope.newChat, timestamp: new Date().getTime()});
      $scope.newChat = '';
    };
    $scope.removeChat = function (chat) {
      $scope.chats.$remove(chat);
    };
  })
  .controller("collabCtrl", function($scope, firebaseService, $firebaseObject) {
    var ref = firebaseService.getRootRef();
    var textObj = $firebaseObject(ref.child('text'));
    textObj.$bindTo($scope, 'text');
  })
  .service('firebaseService', function () {
    this.getRootRef = function () {
      return new Firebase('https://shining-fire-6745.firebaseio.com');
    };
  });
