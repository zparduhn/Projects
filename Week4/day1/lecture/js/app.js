angular.module('uiRouteDemo', ['ui.router'])

.config(function($urlRouterProvider, $stateProvider){

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('list', {
        url: '/list',
        controller: 'listController',
        templateUrl: 'list-tmpl.html'
    });

});
