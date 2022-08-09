
// enter the input to validate it is prime number or not.

input = 19
flag = true
if (input  == 2 ) {
    flag = true    
} else {
    for (let index = 2; index <= input/2; index++) {
        if (input % index == 0) {
            flag = false
            break;
        }   
    }
}
if (flag) {
    console.log("Given number is a Prime Number")
} else {
    console.log("It isn't prime")
}