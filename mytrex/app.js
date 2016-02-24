angular.module('mytrex', ['ui.router', 'ngMaterial'])


.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/homeTmpl.html',
            controller: 'homeCtrl'
        })
        .state('products', {
            url: '/products/:product',
            templateUrl: 'views/productsView.html',
            controller: 'teamCtrl',
            resolve: {
                teamData: function (product, $stateParams){
                    return productService.getTeamData($stateParams.product);
                },
            }
        });
    $urlRouterProvider
        .otherwise('/');
});
