
/*
    This is a multi-line comment.
*/

// this is a single line comment

// Declaring variables.
var num = 3
var num = 7
var num = num + 2
console.log(num) 

// english like language

num = 7     // number
num = "seven"    // string
num= 9
console.log(num)

num = 2 + 3
console.log(num)


let name = "Navin"
let age = 18


// syntax error
// logical error - bugs


let user = "Navin"
console.log(user)

let num1 = 13
let num2 = 5

console.log(num1 % num2)

let x = 6
x = "Navin"
x = 8.9
console.log(x, typeof x)

let y
console.log(y, typeof y) - undefined

// NaN - Not a Number (illegal number)

let value = Number("987 Navin"); // type conversion


let value1 = parseInt("987 Navin"); // type conversion
console.log(value1, typeof value1);

let nu = 1
nu = nu + 2
nu += 2        // short hand
console.log(nu);

num = num + 1
num += 1
num++            // post increment operator

num = 8
++num               // pre increment operator
console.log(num);

num = 8
num1 = ++num
console.log(num, num1);

// Relational operators

num1 = 7
num2 = 8

let result = num1 != num2
console.log(result);
result = num1 === num2
console.log(result);

// == compare the values not type
// ===   compare the values and type as well 

num1 = 8
num2 = 7

let user1 = "Navin"
let user2 = "Sanjeevan"

let result1 = num1 + num2

// template literal - ${}

console.log(`The addition of ${num1} and ${num2} is ${result1}`);

// let result2 = user1 + " : " + user2
// console.log(result2);


let numb = 8

if(numb%2 === 0) {
    console.log("Even");
}
else {
    console.log("Odd");
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
// index.js
// Displaying index.js