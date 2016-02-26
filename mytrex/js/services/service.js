angular.module('mytrex').service('service', function() {
var documents = [
    {
      Name: "MXD",
      Brochure: "http://www.mytrexinc.com/assets/mxd-info-sheet.pdf",
      Manual: "http://www.mytrexinc.com/download/MXD-Users-Manual-Rev-5.pdf",
      Quick: "http://www.mytrexinc.com/assets/Easy4StepInstallationGeneric.pdf",

    },
    {
      Name: "MXD3G",
      Brochure: "http://www.mytrexinc.com/assets/mxd3g-info-sheet.pdf",
      Manual: "http://www.mytrexinc.com/download/MXD3G%20User%20Manual%20Rev%200%202013-07-29.pdf",
      Quick: "http://www.mytrexinc.com/assets/MXD3G%20QIG%20rev1.0.pdf",

    },
    {
      Name: "myActive",
      Brochure: "http://www.mytrexinc.com/assets/myActive%20Alert%20Info%20Sheet%201.1.pdf",
      Manual: "http://www.mytrexinc.com/download/myActiveAlert%20User%20Manual%20v1.0d.pdf",
      Quick: "http://www.mytrexinc.com/assets/myActive%20Alert%20Mode%20Instruction%20Sheet%20Rev%200.4.pdf",

    },
    {
      Name: "RA3TXW Wall Transmitter",
      Brochure: "",
      Manual: "http://www.mytrexinc.com/assets/TB-589v0rC%20-%20RA3TXW%20Wall%20Transmitter%20Guide.pdf",
      Quick: "",
      French: "",
    }


  ];
  this.getDocuments = function(){

      return documents;
  };

});
