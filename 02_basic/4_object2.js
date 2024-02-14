//object singleton
// const instagramUser=new Object();

//literal object
const instagramUser={} 
// console.log(instagramUser); //{} empty object

//adding propeties to object
instagramUser.id=12345;
instagramUser.name="Anurag";
instagramUser.isLoggedIn=false;
// console.log(instagramUser);


//another object .........nested object..........................
const anotherUser={
    email:"anurag@gmail.com",
    fullName:{
        userName:{
            firstName:"Anurag",
            lastName:"Gupta"
        }
    }
}
// console.log(anotherUser.fullName.userName.firstName); //Anurag

//object merging
const obj1={
    1:"a",
    2:"b"
}
// const obj2=obj1;
const obj2={...obj1}; //copying property to obj2
console.log(obj2); // { '1': 'a', '2': 'b' }

const obj3={obj1,obj2} //yhis is not best way to do
console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'a', '2': 'b' } }


//combine the two or more object...............................................................
//Object.assign(target,...source) target is empty object where all propeties of object stored from source(object)
//Object.assign({},o1,o2,o3) all properties of o1,o2,o3 object copied into assigned empty object 
const o1={
    a:10,
    b:20
}
const o2={
    c:30,
    d:40
}

// const obj4=Object.assign(o1,o2);
// console.log('obj4',obj4); //obj4 { a: 10, b: 20, c: 30, d: 40 }
// console.log(o1); //{ a: 10, b: 20, c: 30, d: 40 } because we copied all propety from o2 into o1 object

const o3={
    e:100,
    f:200
}
const obj5=Object.assign({},o1,o2,o3);
console.log(obj5); //{ a: 10, b: 20, c: 30, d: 40, e: 100, f: 200 }
console.log(Object.assign({},o1,o2,o3)); //{ a: 10, b: 20, c: 30, d: 40, e: 100, f: 200 }

//spread opertor to copying object properties

const obj6={...o1,...o2}
console.log(o1,o2);
console.log('obj6',obj6);

//to know print array of keys and values of object
const o4={
    a:1,
    b:2,
    c:3,
    d:4
}

console.log('keys',Object.keys(o4));
console.log('values',Object.values(o4));

//ckecking its has property or not
console.log(o4.hasOwnProperty('a')); //true
console.log(o4.hasOwnProperty('anurag')); //false






