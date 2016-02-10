//Create a Person constructor that accepts name and age as parameters and sets
//those properties accordingly in the Constructor.

var Person = function(name, age){
  this.name = name;
  this.age = age;
  this.sayName = function(){
    alert(this.name);
  }
}


//Now create three instances of Person with data you make up

var Zach = new Person("Zach", 29);
var Mandee = new Person("Mandee", 29);
var Jack = new Person("Jack", 29);



//Now add a sayName method on your Person class that will alert the
//name of whatever Person instance called it.

  //code here
