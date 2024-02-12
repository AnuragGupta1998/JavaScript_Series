// creating  array
const myArr=[1,2,3,4,"A","B","Anurag"];
// console.log(myArr);
// console.log( typeof myArr); //type of array is object
// console.log(myArr[1]); // 2 accesing array element by index

//copying an array will share the reference with another array so changes seeing in both array
const arr2=myArr;
// console.log(arr2); // [ 1, 2, 3, 4, 'A', 'B', 'Anurag' ]
// arr2[0]="Ashutosh"
// console.log(myArr);  // [ 'Ashutosh', 2, 3, 4, 'A', 'B', 'Anurag' ]
// console.log(arr2);   // [ 'Ashutosh', 2, 3, 4, 'A', 'B', 'Anurag' ]

//declaration of an array......................
const arr3=new Array(10,20,30,40,"Anurag");
// console.log(arr3); //[ 10, 20, 30, 40, 'Anurag' ]

//.........................................................Array Methods.........................................................
const arr5=[1,2,3,4,5];
// console.log('arr5=>',arr5);

//  push() method it will add element at last to the array....................
//  arr5.push(10); //it will add element to the end of the array
//  console.log(arr5);// 1, 2, 3, 4, 5, 10 ]

//  pop()  it will remove last element of the array...........
//  arr5.pop();
//  console.log(arr5); // 1, 2, 3, 4, 5 ]

//unshift it will add element at 0 index of an array...............
// arr5.unshift(200);
// console.log(arr5); // [ 200, 1, 2, 3, 4, 5 ]

//shift() it remove 0incex element of an array.............
// arr5.shift();
// console.log(arr5); //[ 2, 3, 4, 5 ]

//includes() it will check weither element is present or not in array..............
// console.log(arr5.includes(2)); //true
// console.log(arr5.includes(100)); //false

//indexOf() it will return index of the element .................................
// console.log(arr5.indexOf(4)); //3 index
// console.log(arr5.indexOf(90)); // element not found in array

//join()  it will return as a string of an array element...............................
//console.log(arr5.join());
//console.log(arr5.join("-")); //we can use separater between string

//slice() it will return the shallow copy of a portion of an array into new array obj..................................
 const demo=arr5.slice(); //it will start from 0 index to end index
console.log(demo); //return all element from array from 0 index
 console.log('slice aarray',arr5.slice(1,3)); //it will slice the array from 1 index and goes 2 index
 console.log('original array',arr5); //it doesn't modify the original array

//splice() it will insertinto array and remove the element from array...................................
const a6=[10,20,30,40,50];
// console.log('original a6->',a6); //original array
// const a7=a6.splice(1); //it will cut element from 1st index and paste to the a7 array
// console.log('a6',a6); //[10] it left with just 0th index element which is 10
// console.log('a7',a7); // [ 20, 30, 40, 50 ] it will have all the eelment from 1st index to last index of a6 array

//adding element to a6 array
const a8=a6.splice(1,4,500,100,"anurag",true) //it remove from 1st index 4 element from original array and insert insert 500,100,Anurag,true into original array
console.log(a8);  //[20,30,40,50]
console.log(a6);  //[ 10, 500, 100, 'anurag', true ]


