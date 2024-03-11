//function constructor
function user(username,age){
    this.username=username;
    this.age=age;

    this.display=function(){
        console.log(this.username,this.age);
    }
    //return this;  //implicitly defined this by constructor
}

//new keynord used to create new object(instance)
const one = new user("anurag",25)
console.log(one);
console.log(one.display());
console.log(one instanceof user); 

const two = new user('ashutosh',20)
console.log(two)
console.log(two.display());