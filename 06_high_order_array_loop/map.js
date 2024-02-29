const arr=[1,2,3,4,5];

// const result=arr.map(num=>num*2) //[ 2, 4, 6, 8, 10 ]
const result=arr.map( (num) => num*2 ) //[ 2, 4, 6, 8, 10 ]
// console.log(result);

//chaining of map method.........
const result2=arr.map((num)=>num*10).map((num)=>num+2)
console.log(result2); //[ 12, 22, 32, 42, 52 ]

//chaining with filter.........
const result3=arr.map((num)=>num*10).map((num)=>num+2).filter((num)=>num>22)
console.log(result3); //[ 32, 42, 52 ]
