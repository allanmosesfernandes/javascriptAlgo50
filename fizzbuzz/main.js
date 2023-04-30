

(() => {
var abba = "a"
let babba = "b";
})()
/* 
Fizzbuzz program
*/

// for (let i = 1; i<= 100; i++) {

//     let output = "";

//     if( i % 3 === 0 && i % 5 === 0) {
//         output += "Fizzbuzz"
//     } else if (i % 3 == 0 ) {
//         output += "Fizz"
//     }else if (i % 5 == 0 ) {
//         output += "Buzz"
//     }else {
//         output = i;
//     }
//     console.log(output);
// }

// /* 
// Using Switch 
// */
// function isDivisible( number,mod ) {
//     return number % mod === 0;
// }

// for (let i = 1; i <= 100; i++) {

//     let output = "";
    
//     switch(true) {

//         case isDivisible( i, 15):
//             output += "FizzBuzz"
//             break;

//         case isDivisible( i , 3):
//             output += "Fizz";
//             break;

//         case isDivisible( i , 5): 
//             output += "Buzz";
//             break;

//         default:
//             output = i;
//             break;
//     }

//     console.log(i, output)
// }

// /* Fizzbuzz without a Loop */
// const isMultiple = (number, multiple) => {
//     return number % multiple === 0;
// }

// const numbers = [...Array(100).keys()];
// console.log(numbers.map(number => {

//     let num = number+1;

//     switch(true) {
//         case isMultiple(num,15): return "Fizz Buzz";
//         case isMultiple(num,3): return "Fizz";
//         case isMultiple(num,5): return "Buzz"
//         default: return num
//     }
// }).join("\n"))