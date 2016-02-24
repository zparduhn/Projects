angular.module('carFire').service('carService', function($stateParams){
  var ref = new Firebase('https://shining-fire-6745.firebaseio.com');
  this.getCars = function(){
    return ref.child('/Cars');
  };
  this.getCar = function(carId){
      return ref.child('/Cars/' + carID);
  };
  this.getComments = function(carId){
      return ref.child('/Cars/' + carID + '/comments');
  };

});
