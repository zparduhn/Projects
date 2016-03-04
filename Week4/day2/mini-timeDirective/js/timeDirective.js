angular.module('timeApp').directive('showTime', function(){
  return {
    restrict: 'E',
    template: "<div> The current time is {{time | date: format}}" +
    "</div><div> The current time is {{time2 | date: format}} </div>",
    scope: {
        format: '=',
        update: '&'
    },
     link: function(scope, element, attrs){
       var currentTime = new Date();

       element.css({
         "font-weight":"Bold",
         "color":"red"
       });
       element.on('mousedown', function(){

        scope.update();
        scope.$apply();
       });

       scope.time = currentTime;
       scope.time2 = new Date(currentTime.toGMTString());
     }
    //  },
    //  controller: function($scope, myService, $timeout){
     //
    //    myService.validateEmail($scope.email)
    //    .then(function(){
     //
    //    });
     //
    //  }

  };
});
