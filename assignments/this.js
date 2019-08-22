/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding: used in a global context whenever function is invoked
* 2. Implicit binding: used when dot notation is used to invoke a function
* 3. Explicit binding: used when .call(), .apply() or .bind() are used in a function
* 4. New binding: used when new keyword is applied creating a new object with a function 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function lamp(){
    console.log(this.lampblue);
}
lamp();
const lampOverhead = "🛋";
// Principle 2

// code example for Implicit Binding
let myLamp = {
    item: 'lamp',
    sound: 'clank',
    lamp: function(){
        console.log(`${this.sound}`);
    }
}
myLamp.lamp();
// Principle 3

// code example for New Binding
function Color(favorite){
  this.shade = favorite;
}

let myFavoriteColor = new Color('purple');

console.log(`My favorite color is ${myFavoriteColor.shade}`);
// Principle 4

// code example for Explicit Binding
function berry (){
  console.log(this.name);
}
let myBerry= {
  name: 'cranberry',
  color: 'red'
}
berry.call(myBerry);