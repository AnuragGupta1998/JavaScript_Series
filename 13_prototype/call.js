const setUserName=function(username){
    this.username=username;
}

const createUsername=function(username,email,password){
    
   setUserName.call(this,username)  //call() uses to call the function and hold the reference of the called function(setUserName) 
    this.password=password;         // with current context by this keyword  
    this.email=email;
}

const user=new createUsername("anurag",'anurag@gmail.com',12345);
console.log(new createUsername("anurag",'anurag@gmail.com'));
console.log(user);
userTwo=new createUsername('ashutosh','ashutosh@gmail.com',123);
console.log(userTwo);