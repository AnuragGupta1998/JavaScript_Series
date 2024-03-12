class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password
    }
    display(){
        console.log(`username is ${this.username} and email is ${this.email} and password is ${this.password}`);
    }

}
const one=new Teacher('Anurag','anurag@gmail.com',12345)
one.logMe()
one.display()

const two=new User('Ashutosh','a@gmail',1111)
two.logMe()
// two.display()// it can not access inherited class propeties anf method
