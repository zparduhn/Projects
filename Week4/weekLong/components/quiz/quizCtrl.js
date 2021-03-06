angular.module('quizApp').controller('quizCtrl', function($scope, $stateParams, quizService){

   $scope.quizName = $stateParams.quizName;
   $scope.questions = quizService.getQuestions()[$scope.quizName].questions;
   $scope.answers = {};
   console.log($scope.questions);
   //$scope.currentQuestion = $scope.questions[0];


   $scope.setCurrentQuestion = function (question) {
     $scope.currentQuestion = question;
   };

   $scope.nextQuestion = function () {
     var idx = $scope.questions.indexOf($scope.currentQuestion);
     if ($scope.questions[idx + 1]) {
       $scope.currentQuestion = $scope.questions[idx + 1];
     } else {
       return;
     }
   };

   $scope.checkMyAnswers = function () {
     quizService.checkMyAnswers($scope.questions, $scope.answers).then(function (response) {
       $scope.results = response;
     });
   };

   $scope.reset = function () {
     $scope.answers = {};
     $scope.currentQuestion = $scope.questions[0];
   };


});
