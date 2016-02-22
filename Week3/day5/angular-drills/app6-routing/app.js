angular.module('routingApp', ['ngRoute']).config(function($routeProvider, $locationProvider){

    $routeProvider
    // route for the home page
           .when('/', {
               templateUrl : 'pages/home.html',
               controller  : 'mainController'
           })

           // route for the about page
           .when('/about', {
               templateUrl : 'pages/about.html',
               controller  : 'aboutController'
           })

           // route for the contact page
           .when('/contact', {
               templateUrl : 'pages/contact.html',
               controller  : 'contactController'
           });
           .otherwise
    $locationProvider.html5Mode(true);
});
