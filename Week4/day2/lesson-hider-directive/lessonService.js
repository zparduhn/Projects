angular.module('directivePractice').service('lessonService', function($http) {
  this.getSchedule = function(){
    return $http.get('schedule.json');
  };
});
