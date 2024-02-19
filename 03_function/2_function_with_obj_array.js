
//...number is rest operator....................
function calculateSum(n1,n2,...number){
       return n1+n2
    // return number;
}
// console.log(calculateSum(2,3,4,5)); //NaN(Not A Number)
// console.log(calculateSum(2,3)); //5
// console.log(calculateSum(1,2,3,4,5,6,7,8)); //number=3,4,5,6,7,8



//handle object in function.................................................................
const user={
    username:"Anurag",
    age:25,
    location:"delhi"
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and the age is ${anyObject.age} and its location is ${anyObject.location}`);
}
handleObject(user); //username is Anurag and the age is 25 and its location is delhi

//directly passing object......
handleObject({username:"Ashutosh",age:20,location:'delhi'}) //username is Ashutosh and the age is 20 and its location is delhi



//function with array..............................................................................
const myArray=[10,20,30,40];

function showArray(giveArray){
    // return giveArray
    return giveArray[2]
}
console.log(showArray(myArray)); // [ 10, 20, 30, 40 ]
console.log(showArray(myArray)); // 30 3rd index value of array