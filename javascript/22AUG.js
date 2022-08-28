// drawing cats ==> Single lin comment.
/**
 * 
 * Multi-line comment goes here.
 */

var drawCats = function (howManyCats) {
    for (let index = 1; index <= howManyCats; index++) {
        console.log(index+" =^.^=");
    }
}

drawCats(3) // you can take the input from user, instead of 8.

/**If you use === to compare the number 5 and the
string "5", JavaScript will tell you they’re not equal. But if you
use == to compare them, it will tell you they’re the same: */

var stringNumber = "5";
var actualNumber = 5;
/**
 * Variables are used to store information to be referenced & manipulated in a computer program.
 */
console.log(stringNumber == actualNumber); // compares the value, not type
console.log(stringNumber === actualNumber); // compares the value, along with it's contenet.

// javascript is dynamically typed langague.
console.log(typeof(stringNumber));
stringNumber = 23422; // assigning number 
console.log(typeof stringNumber); // now it become number