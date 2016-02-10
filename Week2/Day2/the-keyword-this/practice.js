//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //To eaily pass in and out variable names without knowing the names. Speed of code.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //1) How it is being invoked. 2) Look to the left of the period.
      // 3)Specify what the value should be bound to using call, apply, bind 5) What happens when we use the keyword new

  // 3) What is the difference between call and apply?

      //Call invokes the function. Apply applies the function to a variable.

  // 4) What does .bind do?

      //bind doesn't invoke the funciton


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*
var user = {
  username: "Zoltan",
  email: "zach@email.com",
  getUsername: function getUsername(){
    return this.username;
  }
}

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getMyUsername;

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

function Car(make, model, year){
  this.carMake = make;
  this.carModel = model;
  this.carYear = year;
  this.moveCar = function(){
    return this.carYear + 10;
  };
}

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function.
//You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).


//Continuation of previous problem

var getYear = function(){
  return this.carYear;
};

//Above you're given the getYear function. Using your prius and mustang objects from above,
//use the proper syntax that will allow for you to call the getYear function with the prius
//then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
getYear.call(prius);
getYear.call(mustang);


//New Problem



var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function(){
  console.log(this.username);
};

setTimeout(getMyUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
  //After 5 seconds undefined will appear in the console.

//In the example above, what is the 'this keyword' bound to when getUsername runs?

//bound to the window

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.

var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function(){
  console.log(this.myUser.username);
};

setTimeout(getMyUsername, 5000);
