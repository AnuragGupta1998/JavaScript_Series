class User{
    constructor(username,password){
        this.username=username;
        this.password=password;
    }

    //getter-setter method.....................................................
    //method name should be same as class(constructor) propeties name
    get username(){
        return this._username;
    }
    set username(value){
        this._username=value
    }
}
const one =new User("anurag",12345)
console.log(one);
console.log(one.username);