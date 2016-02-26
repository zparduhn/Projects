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
    templateUrl: 'views/documentsDir.html',
    controller: 'documentsCtrl',
    // scope: {
    //     format: '=',
    //     update: '&'
    // },
    //  link: function(scope, element, attrs){
    //    console.log("You made it here");
    //    element.on('click',function(){
    //          var pdf_link = element.attr('href');
    //         console.log(pdf_link);
    //          //var iframe = '<div class="iframe-container"><iframe src="'+pdf_link+'"></iframe></div>';
    //          //var iframe = '<object data="'+pdf_link+'" type="application/pdf"><embed src="'+pdf_link+'" type="application/pdf" /></object>'
    //          var iframe = '<object type="application/pdf" data="'+pdf_link+'" width="100%" height="500">No Support</object>';
    //          scope.createModal({
    //              title:'Mytrex Docutments',
    //              message: iframe,
    //              closeButton:true,
    //              scrollable:false
    //          });
    //          return false;
    //      });
     //
    //    //var currentTime = new Date();
     //
    //   //  element.css({
    //   //    "font-weight":"Bold",
    //   //    "color":"red"
    //   //  });
    //   //  element.on('mousedown', function(){
    //   //   //  scope.time = new Date();
    //   //   //  scope.time2 = new Date(currentTime.toGMTString());
    //   //   //
    //   //   scope.update();
    //   //   scope.$apply();
    //   //  });
    //    //
    //   //  scope.time = currentTime;
    //   //  scope.time2 = new Date(currentTime.toGMTString());
    //  }
  };
});
