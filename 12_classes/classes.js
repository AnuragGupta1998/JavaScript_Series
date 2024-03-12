// class in javascript........................
class User{
    //constructor of class.............
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password
    }

    //method.......................
    encryptPassword(){
        return `${this.password}abc`;
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

//creating object of class
const one=new User('Anurag','anurag@gmail.com',12345)
console.log(one); //User { username: 'Anurag', email: 'anurag@gmail.com', password: 12345 }

console.log(one.encryptPassword());//12345abc
console.log(one.changeUsername()); //ANURAG

//behind the scene.........................
function User1(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password
}
User1.prototype.encrypt=function(){
    return `${this.password}abc`;
}

User1.prototype.changeUser=function(){
    return `${this.username.toUpperCase()}`
} 

const two=new User1('ashutosh','ashutosh@gmail.com',98765)
console.log(two);
