const arr=[1,2,3,4,5,6];

//array de-structure
const[a,b,...remaining]=arr;
console.log(a,b);  //1,2
console.log(remaining);  //[ 3, 4, 5, 6 ]