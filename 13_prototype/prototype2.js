//simple array...........................
const myArr=['superman','spiderman'];

//simple object...........................
const myObj={
    username:'anurag',
    age:25
}

//adding function to super parent object 
Object.prototype.display=function(){
    console.log("Super Parent Prototype is present in all object");
}

//accessing display function from super parent object prototype
console.log(myObj.display());
console.log(myArr.display());


const obj2={};
console.log(obj2.display());




