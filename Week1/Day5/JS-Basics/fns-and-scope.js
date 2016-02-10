//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.


function isTyler(name){
	if(name === 'Tyler'){
		return true;
	}
	else{
		return false;	
	}
}

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.
function getName(){
	var newName = prompt("Whats your name?");
    return newName;
    
}

  //Code Here


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
function welcome(){
	var newName = getName();
	if(newName != null){
		alert("Welcome, "+newName);
	}
}

//Next problem




//What is the difference between arguments and parameters?

  //Answer Here
	//Argument is passed when calling a function.
	//Parameter is something that is given to a function.

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here

//null, NAN, Undefined, (0), "", false, (Empty String)

//!null, >1, [] = false, 

//Next Problem



//Create a function called myName that returns your name

  //Code Here  

function myName(){
	return "Zach";  
  };

//Now save the function definition of myName into a new variable called newMyName

  //Code Here
  var newMyName = myName;

//Now alert the result of invoking newMyName
alert(newMyName());


//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn(){
	return function (){
		return "zach";
	}
	
}


//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
  var innerFn = outerFn();

//Now invoke innerFn.

