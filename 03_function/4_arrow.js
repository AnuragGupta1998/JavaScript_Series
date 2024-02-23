const user={
    username:"Anurag",
    age:25,
    welcomeMessage:function(){ //function inside object
        console.log(this); //this refer to current contex 
        console.log(`${this.username},Welcome to the Website`); //Anurag,Welcome to the Website
    }
}
console.log('outerside',user.age);
user.welcomeMessage()

// console.log(this); //this refer to global object

//in funcion this refer to global object
function display(){
    let n='anurag';
    console.log(this.n);  //undefined
    console.log(n);    //anurag    
}
display()
//Function Expression.....................................................
const m1=function(){
    console.log("Function Expression");
}
m1();

//Arrow Function
const d=()=>{console.log("arrow function")};
d()

