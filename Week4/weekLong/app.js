angular.module('quizApp', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider
        .otherwise('/');
  $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'components/home/homeView.html',
            //template: '<div>TEst</div>',
            controller: 'homeCtrl'
        })
        .state('quiz', {
            url: '/quiz/:quizName',
            templateUrl: 'components/quiz/views/quizContainerView.html',
            //template: '<div>TEst</div>',
            controller: 'quizCtrl'
        }).state('quiz.view', {
        parent: 'quiz',
        views: {
            'list': {
                templateUrl: 'components/quiz/views/questionListWrapperView.html'
            },
            'detail': {
                templateUrl: 'components/quiz/views/questionDetailView.html'
            }
        }
      });

});
