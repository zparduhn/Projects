angular.module('mytrex').service('signInSrvc', function($http, $q) {

  //this.submitSignIn = function(task, userName, password) {
    // var deferred = $q.defer();
    // $http({
    //     method: 'POST',
    //     url: 'http://www.mytrexinc.com/distributor/api/token_utils.php',
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded'
    //     },
    //     params: "task=" + task + "&userName=" + userName// + "&password=" + password,
    //   })
    //   .then(function(response) {
    //       //   //console.log(JSON.parse())
    //       // if(response.status == 200){
    //       //   return deferred.resolve(response);
    //       // }
    //       // else{
    //       //  return deferred.resolve("Problems")
    //        return console.log(response);
    //     // /}
    //   });
    //  console.log(deferred.promise);
    //  return deferred.promise;


this.submitSignIn = function(task, userName, password)
  {
  	//var output = document.getElementById("message");

  	var hr = new XMLHttpRequest();
          hr.open("POST", "http://www.mytrexinc.com/distributor/api/token_utils.php", true);
          hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          hr.onreadystatechange = function() {
  		if(hr.readyState === 4 && hr.status === 200)
  		{
  			//output.innerHTML = hr.responseText;
  			var data = JSON.parse(hr.responseText);
  		//	output.innerHTML = "&nbsp;";
  			if(data.status === "error")
  			{
  				//output.innerHTML = data.message;
          console.log("failed")
        }
  			else
  			{
          //console.log(data);
          sessionStorage.setItem('token', data.token);
  				sessionStorage.setItem('UserKey', data.UserKey);
  				sessionStorage.setItem('distributorKey', data.distributor);
  				sessionStorage.setItem('email', data.email);
  				sessionStorage.setItem('display_name', data.display_name);
  				window.location = "http://www.mytrexinc.com/distributor/menu.php";
  				//window.location = "http://www.mytrexinc.com/distributor/search.php?token="+data.token;
  				//document.getElementById('test').innerHTML = sessionStorage.getItem('token')+"New Token";
  			}
  	  }
    };
    hr.send("task="+task+"&userName="+userName+"&password="+password);
    //output.innerHTML = "requesting...";
    //output.innerHTML = "Counting electrons...";
  }
});
