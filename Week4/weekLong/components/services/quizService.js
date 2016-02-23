angular.module('quizApp').service('quizService', function($q, $http){

  this.getQuizNames = function(){
      return quizArray;
  }.this(function(results){
    return results;
  });

  this.getQuestions = function(quizName){
      return quizQuestions;
  }.this(function(results){
    return results;
  });

  this.checkAnswers = function(question, answer){
      if(question === answer){
        return true;
      }
      else{
        return false;
      }
  }.this(function(results){
    return results;
  });

});
