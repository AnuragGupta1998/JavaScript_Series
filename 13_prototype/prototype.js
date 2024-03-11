//function is object so we can add properties and functionality to object
function createUser(username,age){
    this.username=username;
    this.age=age;
}
//adding properties to createUser...........................
createUser.prototype.defaultAge=`default age is ${15}`;

//adding properties and functionality to createUser........................................
createUser.prototype.display=function(){
    // console.log(`username is ${this.username} and the age is ${this.age}`);
    return `username is ${this.username} and the age is ${this.age}`;
}
//accessing the function prototyped..................................................
const one = new createUser("anurag",25);
console.log(one);
console.log(one.defaultAge);
console.log(one.display());

// Object.prototype.color='red'; //set color property to super Object that can access by any child object
// createUser.prototype.color='black'
// one.color='green'
// console.log(one.color);

const two= new createUser("ashutosh",20)
console.log(two);
console.log(two.defaultAge);
console.log(two.display());

// two.color='cyan'
// console.log(two.color);

//show which properties and funtion are in prototype.................
console.log(createUser.prototype);


