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
})
.directive('navDocuments', function() {
  return{
    restrict: 'AE',
    templateUrl: 'views/documents/documentsDir.html',
    controller: 'documentsCtrl',
  };
})
.directive('navMxddetails', function(){
  return{
    restrict: 'AE',
    templateUrl: 'views/products/mxdDir.html',
    controller: 'productsCtrl',
  };
})
.directive('navMxd3gdetails', function(){
  return{
    restrict: 'AE',
    templateUrl: 'views/products/mxd3gDir.html',
    controller: 'productsCtrl',
  };
})
.directive('navMyaadetails', function(){
  return{
    restrict: 'AE',
    templateUrl: 'views/products/myaaDir.html',
    controller: 'productsCtrl',
  };
});
