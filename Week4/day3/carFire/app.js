angular.module('carFire', ['ui.router', 'firebase'], function() {

})
.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $stateProvider
        .state('cars', {
            url: '/Cars',
            templateUrl: 'views/cars.html',
            controller: 'carsCtrl',
            resolve: {
                carsRef: function(carService) {
                    return carService.getCars();
                }
            }
        })
        .state('car', {
            url: '/Cars/:carId',
            templateUrl: 'views/car.html',
            controller: 'carCtrl',
            resolve: {
                carRef: function(carService) {
                    return carService.getCar();
                },
                commentsRef: function(carsService, $stateParams) {
                    return carService.getComments($stateParams.carId);
                }
            }
        });
    $urlRouterProvider
        .otherwise('/Cars');
});
