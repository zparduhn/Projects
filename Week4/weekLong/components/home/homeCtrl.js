angular.module('quizApp').controller('homeCtrl', function($scope){

    $scope.quizzes = [{name: 'angular'}, {name: 'html'}];
    $scope.pastQuizzes = [];

});
