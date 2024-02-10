const name="Anurag"
const age=25
// console.log(name+age); //Anurag 25  both of not used in moden application
// console.log(name+age+" B.Tech"); //Anurag 25 B.Tech

// this is the way of concating of string 
// console.log(`Hello my name is ${name} and my age is ${age}`);

const N=new String("Anurag")
// console.log(N.endsWith('g')); //return true

//some predefined function or method used in string.........................................................

//trim() to remove whitespces from string........
let str="  Anurag  "
// console.log(str); //" Anurag "
// console.log(str.trim());// "Anurag"

//substring() it return the part of string from start index to up to last index
let str2="JavaScript"
// console.log(str2.substring(0,3)); //Jav it start from 0index and goes upto 3index but not include 3index element

//toLowerCase() toUpperCase()   it simple convert into lower_case or upper_case
// console.log(str2.toLowerCase());
// console.log(str2.toUpperCase());

//slice()   it extract the section of string from original string and return as new string 
//it does not modifying original string
let str3="Anurag"
// console.log(str3.slice(0,4,)); // 0-2 index Anur
// console.log(str3.slice(-4)) // it start from end

//replace()   it replace string with given string..........
let str4="Anurag is good boy"
// console.log(str4.replace("good","excellent")); //Anurag is excellent boy
// console.log(str4.replace("Anurag","Ashutosh")); //Ashutosh is good boy

//include()   it simply used to find the element is present in string or not..
// console.log(str4.includes("Anurag")); //true 
// console.log(str4.includes("ur")); //true 
// console.log(str4.includes("Z")); //false
// console.log(str4.includes("Aug")); //false

// split() it used to separate the string by seprator
let str5="Anurag-is-Good-Boy-but-sometimes-it's-naughty"
console.log(str5.split('-'));


 



