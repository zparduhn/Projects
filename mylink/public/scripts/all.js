angular.module('mylink', ['ui.router'])

.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('login');

  $stateProvider
  .state('login', {
    url: '/',
    templateUrl: './html/login/loginTemplate.html',
    controller: 'loginController'
  })
}]) // end config

angular.module('mylink').controller('loginController', ["$scope", "loginService", function($scope, loginService){

}])

angular.module('mylink').service('loginService', ["$http", "$state", function($http, $state) {

}]);
