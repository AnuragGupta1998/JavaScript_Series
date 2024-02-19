//function is the block of code to perform task

//function defination
function hello(){
    console.log("welcome to function");
}
//function call
hello();// welcome to function

//function to add two numbers................................
// function add(num1,num2){ //num1 and num2 are parameter
//     console.log(num1+num2);
// }
// add(2,3) //2,3 are argument 

//function with return value.............................
function add(n1,n2){
    return n1+n2;
}
const result=add(2,8);
console.log(result); //10

//function with parameter
// function loginUserName(username="defaultNAme"){  //setting default name if username not passed in argument
function loginUserName(username){  //setting default name if username not passed in argument

    // if(username === undefined){
    //     console.log('please enter username');
    //     return;

    // }
    if(!username){  //if username is empty then it is false but "!" uses to turn false into true
        console.log('please enter username');
        return;

    }

    return `${username} just logged in`;

}
console.log(loginUserName()); // please enter username
console.log(loginUserName("anurag")); // anurag just logged in
console.log(loginUserName()); // please enter username
