//prototype inheritance................................
const user={
    username:'anurag',
    email:'anurag@google.com'
}
const Teacher={
    username:'Teacher',
    makeVideo:true
}
const TeacherSupport={
    username:'teacherSupport',
    isAvailable:false,  
}
const TASupport={
    username:'TASupport',
    makeAssignment:"Js assignment",
    fullTime:true,
    __proto__:TeacherSupport // inheritance the properties of TeacherSupport object now we can access TeacherSupport object
}
console.log(TASupport.isAvailable); //false

//inheritance Teacher object properties into TeacherSupport object.....................................
TeacherSupport.__proto__=Teacher;
console.log(TeacherSupport.makeVideo); //true

//Teacher inheriting the properties of User object
Teacher.__proto__=user
console.log(Teacher.email); // anurag@google.com

//Modern way to inheritance in prototype....................................................................
const T1={
    color:'red'
}
const T2={
    name:'T2'
}
const T3={
    speed:40
}
Object.setPrototypeOf(T2,T1) //inheriting the T1 properties into T2
Object.setPrototypeOf(T3,T2) //inheriting the T1 properties into T2

console.log(T2.color); //red
console.log(T3.name); //T2
console.log(T3.color); //red T3 has access of propeties of T1 because T2 has inheriting the T1











