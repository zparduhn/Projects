angular.module('', ['ng.router'], function() {

})
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

      $stateProvider
          .state('', {
              url: '/',
              templateUrl: 'views/.html',
              controller: '',
          })
          .state('', {
              url: '',
              templateUrl: 'views/.html',
              controller: '',
              resolve: {
                  : function(carService) {
                      return carService.getCar();
                  },
                  : function(carsService, $stateParams) {
                      return carService.getComments($stateParams.);
                  }
              }
          });
      $urlRouterProvider
          .otherwise('/');
  });
