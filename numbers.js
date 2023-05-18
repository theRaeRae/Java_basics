let x = 3.14;    // A number with decimals
let y = 3;       // A number without decimals

let a = 123e5;    // 12300000
let b = 123e-5;   // 0.00123

//Unlike in C, JavaScript only uses one type of numbers

//Integers are accurate up to 15 digits
//Maximum number of integers for decimals are 17

//Floating point arithmetic are not always accurate.
let c = 0.2 + 0.1;

//Do this instead
let d = (0.2 *10 + 0.1 *10) / 10;

//JavaScript uses the + operator for both addition and concatenation.
//If you add two numbers, the result will be a number:

//adding two numbers
let e = 10;
let f = 20;
let g = e + f; //result shows 30

//adding two strings
let h = "10";
let i = "20";
let j = i+ h; //results shows "1020"

//adding an int and a string
let k = "10";
let l = 20;
let m = k + l; //results shows "10"20



