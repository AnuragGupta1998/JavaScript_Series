const arr1=[1,2,3,4,5];
const arr2=[10,20,30,40,50];

// //concate() is used to concate the two array......
// console.log(arr1.concat(arr2)); //[1,2,3,4,5,10,20,30,40,50]
// console.log(arr2.concat(arr1))//[10,20,30,40,50,1,2,3,4,5]
// console.log(arr1.concat(arr2,[100,200,300,400])); //concate more than two array

//spread operator to deep copying .......
const SpreadOperator=[...arr1,...arr2];
// console.log(SpreadOperator); //[1,2,3,4,5,10,20,30,40,50] and we can access by index also

const arr3=[...arr1];
// console.log(arr3);

//flate() to create new array with sub-array element
arr4=[1,2,3,[10,20,30],4,5,[40,50,[60,70,80],90],100];
console.log('flate()',arr4.flat(2));

//convert into Array..............................................................................
const Name="Anurag";
console.log(Array.isArray(Name)); //false
console.log(typeof Name); //string

console.log(Array.from(Name)); // [ 'A', 'n', 'u', 'r', 'a', 'g' ]

const N=Array.from(Name);
console.log(N);    //[ 'A', 'n', 'u', 'r', 'a', 'g' ]
console.log(typeof N); //object

//convert variables into array
let a=20,b=30,c=40
console.log(Array.of(a,b,c)); //[20,30,40]
console.log(Array.of("Anurag",true,"200",500,40.6));

