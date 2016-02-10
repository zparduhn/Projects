//Just like you can add methods to your own constructor,
//you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance
//of String can call reverse and reverse itself.
var str = "Hello"
String.prototype.reverse = function(){
  return this.split('').reverse().join('');
};

str.reverse();

// var str = "Hello"
// String.prototype.reverse = function(){
//   var o = '';
//   for (var i = this.length - 1; i >= 0; i--){
//     o += str[i];
//   }
//   return o;
// };
//
// str.reverse();
