// console.log('scope in javascript');
//global scope
let a=10;
const b=20;

if(true){
    //(function / block) scope
    let a=100;
    const b=200;
    // console.log("inside if",'a=',a,'b=',b);
}

// console.log("outer side",'a=',a,'b=',b); 

//nested function

one();
function one(){
    const username="one"
    console.log('inside one',username);
    
    function two(){
        const name="two"
        console.log('inside two',username);
    }
    two()
    // console.log(name);
}
console.log('global scope');


