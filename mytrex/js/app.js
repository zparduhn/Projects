angular.module('mytrex', ['ui.router'])


.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/home/homeTmpl.html',
            controller: 'homeCtrl'
        });
        // .state('products', {
        //     url: '/products/:product',
        //     templateUrl: 'views/products/productsView.html',
        //     controller: 'teamCtrl',
        //     resolve: {
        //         teamData: function (product, $stateParams){
        //             return productService.getTeamData($stateParams.product);
        //         },
        //     }
        // });
    $urlRouterProvider
        .otherwise('/');
});
