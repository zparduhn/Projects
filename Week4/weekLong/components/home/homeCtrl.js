angular.module('quizApp').controller('homeCtrl', function($scope){

    $scope.quizzes = [{name: 'Angular'}, {name: 'HTML/CSS'}];
    $scope.pastQuizzes = [];

});
