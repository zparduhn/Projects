angular.module('mylink', ['ui.router'])

.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('login');

  $stateProvider
  .state('login', {
    url: '/',
    templateUrl: './html/login/loginTemplate.html',
    controller: 'loginController'
  })

}])
