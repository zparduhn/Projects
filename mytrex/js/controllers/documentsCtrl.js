angular.module('mytrex').controller('documentsCtrl', function($scope, service){

  $scope.documents = service.getDocuments();

  $scope.checkValue = function(index, value){
    if(index > 0){
      if(value){
        return true;
      }
    }
    return false;
  };

$scope.showPDF = function(pdf){
  var pdfObj = new PDFObject({
    url: pdf,
    id: "pdfRendered",
    pdfOpenParams: {
      view: "FitH"
  }
  }).embed("pdfRenderer");
};

  // Modal plug in.

  (function(a){a.createModal=function(b){defaults={title:"",message:"Your Message Goes Here!",closeButton:true,scrollable:false};var b=a.extend({},defaults,b);var c=(b.scrollable===true)?'style="max-height: 420px;overflow-y: auto;"':"";html='<div class="modal fade" id="myModal">';html+='<div class="modal-dialog">';html+='<div class="modal-content">';html+='<div class="modal-header">';html+='<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';if(b.title.length>0){html+='<h4 class="modal-title">'+b.title+"</h4>"}html+="</div>";html+='<div class="modal-body" '+c+">";html+=b.message;html+="</div>";html+='<div class="modal-footer">';if(b.closeButton===true){html+='<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>'}html+="</div>";html+="</div>";html+="</div>";html+="</div>";a("body").prepend(html);a("#myModal").modal().on("hidden.bs.modal",function(){a(this).remove()})}})(jQuery);


  $scope.iframOpen = function(link){
        var iframe = '<object type="application/pdf" data="'+link+'" width="100%" height="500">No Support</object>';
        $.createModal({
            title:'Mytrex Documents',
            message: iframe,
            closeButton:true,
            scrollable:false
        });
        return false;
  };



});
