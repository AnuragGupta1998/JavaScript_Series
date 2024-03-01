//reduce() is used in to calcuate the sum of array
const arr=[1,2,3,4,5]

// acc=accumalator currVal=current value
const total=arr.reduce((acc,currVal)=>{
    console.log(`acc:-${acc} currVal:-${currVal}`);
    return acc+currVal},2) //what we pass after callback function is become accumalator
console.log(total); //15

//arrays of object
const obj=[
    {
        name:"js",
        price:299
    },
    {
        name:"java",
        price:2999
    },
    {
        name:"python",
        price:3999
    },
    {
        name:"DSA",
        price:499
    },
    {
        name:"mobile",
        price:5999
    }
]

const totalPrice=obj.reduce((acc,item)=>acc+item.price,0);
console.log(totalPrice);  //13795