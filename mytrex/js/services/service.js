angular.module('mytrex').service('service', function() {
var documents = [
    {
      name: "MXD",
      brochure: "http://www.mytrexinc.com/assets/mxd-info-sheet.pdf",
      manual: "http://www.mytrexinc.com/download/MXD-Users-Manual-Rev-5.pdf",
      quick: "http://www.mytrexinc.com/assets/Easy4StepInstallationGeneric.pdf",
      french: "Coming Soon!",
    },
    {
      name: "MXD3G",
      brochure: "http://www.mytrexinc.com/assets/mxd3g-info-sheet.pdf",
      manual: "http://www.mytrexinc.com/download/MXD3G%20User%20Manual%20Rev%200%202013-07-29.pdf",
      quick: "http://www.mytrexinc.com/assets/MXD3G%20QIG%20rev1.0.pdf",
      french: "Coming Soon!",
    },
    {
      name: "myActive",
      brochure: "http://www.mytrexinc.com/assets/myActive%20Alert%20Info%20Sheet%201.1.pdf",
      manual: "http://www.mytrexinc.com/download/myActiveAlert%20User%20Manual%20v1.0d.pdf",
      quick: "http://www.mytrexinc.com/assets/myActive%20Alert%20Mode%20Instruction%20Sheet%20Rev%200.4.pdf",
      french: "Coming Soon!",
    }

  ];
  this.getDocuments = function(){

      return documents;
  };

});
