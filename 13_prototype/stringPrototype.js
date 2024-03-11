const str="Anurag    "

//String Prototype function that remove extra spaces
String.prototype.trueLength=function(){
    console.log(this.trim().length);
    console.log(`${this}`);
}
str.trueLength()
'ashutosh'.trueLength()

console.log(String.prototype);

const arr=[1,2,3,4,5,6]

Array.prototype.trueLength=function(){
    console.log(this.length);
}
console.log(Array.prototype);