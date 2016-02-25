angular.module('mytrex')
.directive('navDirective', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/header.html'
  };
})
.directive('navFooter', function() {
  return{
    restrict: 'E',
    templateUrl: 'views/footer.html'
  };
});
