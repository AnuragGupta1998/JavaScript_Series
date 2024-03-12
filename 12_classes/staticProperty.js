//statis keyword to stop access of the method which declared as static
class User{
    constructor(username){
        this.username=username
    }
    display(){
        console.log(`username is ${this.username}`)
    }
    static show(){
        console.log('static function');
    }
}

const one = new User('anurag')
one.display()
// one.show() //it can not be access because of static keyword