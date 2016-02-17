app.controller('mainCtrl', function($scope, dataService){
  var selectedText = "";
  $scope.changedValue = function(text){
    selectedText =  text;
  };
  $scope.test = "test";
  $scope.quotesArray = dataService.getData();

  $scope.add = function(quote, author){
    dataService.addData(quote, author);
    $scope.quotesArray = dataService.getData();
  };
  $scope.remove = function(){
    dataService.removeData(selectedText);
    $scope.quotesArray = dataService.getData();
  };


});
