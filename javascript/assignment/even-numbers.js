
// print even numbers from 1 to 100.
// window.prompt("Please enter the input range")

let input = 100
var array = []
for (let index = 1; index <= input; index++) {
    if (index % 2 == 0) {
        array.push(index)
    }    
}

/* 
Iterating the output to display in the console.
array.forEach(element => {
    console.log(element)
}); 
*/

console.log(...array) // to display the output in single line.
