
/**
 * Programming is all about manipulating data, but what is data? Data is information that we store in our computer programs. For example, your name is a piece of data, and so is your age. The color of your hair, how many siblings you have, where you live, whether you’re male or female all these things are data.
*/

/**
 * In Javascript, varaibles are 3 types.
 * Numbers
 * strings
 * Boolean
*/

// Declaring variables.
var num = 3
var num = 7
var num = num + 2
console.log(num) 

/**
 * JavaScript lets you perform basic mathematical operations like addition, subtraction, multiplication, and division. To make these calculations, we use the symbols +, -, *, and /, are called operators.
*/

num = 7     // number
num = "seven"    // string
num= 9
console.log(num)

num = 2 + 3
console.log(num)

// variable decalaration
let name = "Navin"
var age = 18


// syntax error
// logical error - bugs


let user = "Navin"
console.log(user)

let num1 = 13
let num2 = 5

console.log(num1 % num2) // returns the remainder

let x = 6
x = "Navin"
x = 8.9
console.log(x, typeof x)

let y
console.log(y, typeof y) - undefined
y = 'Shiv'
console.log(y, typeof y)

// NaN - Not a Number (illegal number)

let value = Number("987 Navin"); // type conversion

console.log(value, typeof value)

let value1 = parseInt("987 Navin"); // type conversion
console.log(value1, typeof value1);

let nu = 1
nu = nu + 2
nu += 2        // shorthand
console.log(nu);

num = num + 1
num += 1
num++            // post increment operator

num = 8
++num               // pre increment operator
console.log(num);

num1 = ++num
console.log(num, num1);

// sample programs
// write a program to calculate how many seconds a min, hour,day and year have.
let noOfSecondsForMin = 60;
let noOfMintuesToHr = 60;
let hour = noOfMintuesToHr*noOfMintuesToHr;
console.log("No of seconds to 1 Hour: "+ hour +"sec");
let day = hour * 24 // 24hrs a day
console.log("No of seconds to 1 Day: "+ day +"sec");
let year = day * 365 // 365 days for a year
console.log("No of seconds to 1 year: "+ year +"sec");
var age = 26*year
console.log("I am "+age+"sec old");


// Relational operators
num1 = 7
num2 = 8

let result = num1 != num2
console.log(result);
result = num1 === num2
console.log(result);

// == (double equal) compare the values not type
// === (triple equal)  compare the values and type as well 

num1 = 8
num2 = 7
let result1 = num1 + num2
// template literal - ${}
console.log(`The addition of ${num1} and ${num2} is ${result1}`+"\n");


let user1 = "Hema"
let user2 = " Sanjeevan"
result1 = user1+user2;
 // string concatenation using addition operator
console.log(result1 +", length is: "+ result1.length);
let result2 = user1 + " : " + user2
console.log(result2);

// getting a piece of String by indexing.
console.log(result1[5]);

// taking a slice of a String using slice
console.log('the slice of a string is: '+result1.slice(3,9));
// changing the case
console.log(result1.toUpperCase()); // to upper case
console.log(result1.toLowerCase()); // to lowercase

if(num1%2 === 0) {
    console.log(num1+" is Even");
}
else {
    console.log(num1+" is Odd");
}

num = 9
result = ""
if(num%2 === 0) {
    result = "Even"
}
else {
    result = "Odd"
}

result = num%2===0 ? "Even" : "Odd"   // ternary operator ?:

console.log(result);

num1 = 55;
num2 = 11;
let num3 = 59;

// If condition statement.
if(num1 > num2 && num1 > num3)
    console.log(num1);
else if(num2 > num3)
    console.log(num2);    
else
    console.log(num3);    


//loops
// while, do while, for
let i = 1
while(i<=5)
{
    console.log("Hello");
    i++;
}

// calc with all basic operator
// print all the even numbers from 1 to 100
// find a given number is prime or not