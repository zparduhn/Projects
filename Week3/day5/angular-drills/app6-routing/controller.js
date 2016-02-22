angular.module('routingApp').controller('mainController', function($scope) {
     // create a message to display in our view
     $scope.message = 'Everyone come and see how good I look!';
 });

 angular.module('routingApp').controller('aboutController', function($scope) {
     $scope.message = 'Look! I am an about page.';
 });

 angular.module('routingApp').controller('contactController', function($scope) {
     $scope.message = 'Contact us! JK. This is just a demo.';
 });
