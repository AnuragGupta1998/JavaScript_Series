//singleton whern we create using Object and we cant create create more instaces of tat Object
// Object.create()

// object literals creating object........................................................
// object Declaration
const User={
    name:"Anurag",
    age :25
}  
// console.log(User); //{ name: 'Anurag', age: 25 }

//another object declaration...................................................
const symbalDemo=Symbol("mySymbol");
const Anurag={
    name:"Ashutosh",
    "age":20,
    location:"Delhi",
    isLoggedIn:false,
    lastLoggedIn:["Monday","Wednesday","Friday","Sunday"],
    "Full Name":"Anurag Gupta", 
    // [symbalDemo]:"Symbol added sucessfully"
}

Anurag[symbalDemo]="Anurag Symbol data type"
//accessing an object............................................................
//dot natation............
    // console.log(Anurag.name);
    // console.log(Anurag.age);
    // console.log(Anurag.location);

//square bracket notation...........
    //console.log(Anurag["Full Name"]); //Anurag Gupta it can't access by dot nation
    //console.log(Anurag[symbalDemo]);
    //console.log(Anurag);

//adding properties to object...................................................................
   // Anurag['email']="Anurag@gmail.com";
   // Anurag.pincode=110085;
   //console.log(Anurag);

//changing the value of property..............................
Anurag['email']="a@gmail.com";
console.log(Anurag);

//adding function to object.......................................................................
Anurag.display=function(){
    console.log("Hello From Anurag Object");
}
// Anurag.display();
console.log(Anurag.display());
console.log(Anurag);

// function dis2(){
//     console.log('second function');
// }

// Anurag['dusrsa']=dis2;

// console.log(Anurag);

//accessing the property of object by function.......................
console.log("last",Anurag);

Anurag.find=function(){
    console.log(`hello i am ${this.name} and my age is ${this.age}`);
}

Anurag.find() //hello i am Ashutosh and my age is 20
console.log(Anurag.find);






    
