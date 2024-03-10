//function constructor
function user(username,age){
    this.username=username;
    this.age=age;

    this.display=function(){
        console.log(this.username,this.age);
    }
}

//new keynord used to create new object(instance)
const one=new user("anurag",25)
console.log(one.constructor);
const two=new user('ashutosh',20)