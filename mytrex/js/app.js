angular.module('mytrex', ['ui.router'])


.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {


    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/home/homeTmpl.html',
            controller: 'homeCtrl'
        }).state('products', {
            url: '/products',
            templateUrl: 'views/products/productsTmpl.html',
            controller: 'productsCtrl'
        })
        .state('product', {
            url: '/products/:product',
            templateUrl: 'views/products/productTmpl.html',
            controller: 'productCtrl',
            resolve: {
                productData: function (product, $stateParams){
                    return productService.getProductData($stateParams.product);
                },
            }
        }).state('documents', {
            url: '/documents',
            templateUrl: 'views/documents/documentsTmpl.html',
            controller: 'documentsCtrl'
        });
    $urlRouterProvider
        .otherwise('/');
});
