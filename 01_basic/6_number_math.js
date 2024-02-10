// let n=33
// let str=n.toString(); //it conver number into string
// console.log(str); //33
// console.log(n);   //33

const Num=new Number(100)
console.log(Num); //[Number:100]\

console.log(Num.toString()); //100  its now in string so we can perform all string operaation on it
console.log(Num.toString().length); //3
console.log(Num.toString().replace("0","3")); //130 it replace 0 with 3

//toFixed() it formate the number into fixed-point notation

let N=123.567;
console.log(N.toFixed(1)); //123.567=>123.6

console.log(N.toPrecision(3)); //124
console.log((10000000).toLocaleString()); //10,000,000 it form large number into reable form

console.log(Math);
console.log(Math.abs(-4)); // absolute convert -ve value into +ve value
console.log(Math.round(4.6)); // 5 it round off the value 
console.log(Math.ceil(4.2)); // 5 it choose upper value of number
console.log(Math.floor(4.9)); // 4 it choose lower value of number
console.log(Math.sqrt(100)); //square root of an number 100=>10
console.log(Math.random()); //it generate the random values
console.log(Math.round(Math.random()+1));

const min=10;
const max=20;
console.log(Math.floor((Math.random() * (max-min)) + min)); //it always give 10 or more than 10 

