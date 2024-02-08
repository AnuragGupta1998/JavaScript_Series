// ................................BASIC COMPARISON.................................

// console.log(2<3); //true
// console.log(2>3); //false
// console.log(2<=3); //true
// console.log(2>=3); //false
// console.log(2!=3); //true
// console.log(3!=3); //false


// console.log(null==0); //false
// console.log(null<=0); //true
// console.log(null>=0); //true

// console.log("2"==true); //false

console.log("2"==2); //true
console.log("2"===2); //false because it check the data type 

// permitive non-permitive data type 

//permitives values goes into stack and pass it copy to other

let a=3;
let b=a; //copying the value of a
console.log(a,b); //a=3 b=3
b=9;
console.log(a,b);  //a=3 b=9

//non-permitive 

let arr1=[1,2,3,4,5];
let arr2=arr1
console.log(arr1,arr2);

arr2.push(10)
arr2[9]=100;
console.log(arr1,arr2);