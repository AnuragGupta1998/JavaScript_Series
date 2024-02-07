let score=33

// console.log(typeof score);
// console.log(typeof(score));

//Number Conversion
let Name=""
let isNumber=Number(Name);
// console.log(isNumber,typeof isNumber); //NaN(Not An Number) (typeof NaN is number)
let u=undefined
let nu=Number(u);
// console.log('nu',nu);

/*
  "33"=> 33 number
  "33ab"=> NaN number
  " " => 0 number empty string
   null => 0 number
   Nan =>NaN number
   true=>1 number false=>0 number
   undefined => NaN number
 
*/

//Boolean Demo
let boolenaN="Anurag";
let boolenaIs=Boolean(boolenaN);
// console.log(boolenaIs);

/*
1=>true boolean
0=>false boolean
" "=> false boolean
"Anurag"=>true boolean

*/

//String Conversion
let numberS=undefined
let Str=String(numberS)
// console.log(Str,typeof Str);

/*
 33=>33 string
 true=true string
 NaN=>NaN string
 null=>null string
 undefined=>undefined string

*/

//********************************************** OPERATIONS ON DATA  *************************************************
let value=3;
let negValue=-value;
// console.log(negValue);

// console.log(2+2); //4
// console.log(2-2); //0
// console.log(2*2); //4
// console.log(2/3); //0.66666666
// console.log(2**3); //2*2*2=8
// console.log(2%9); //2 reminder

//String operations
let s1="Anurag"
let s2=" Gupta"
let s3=s1+s2
// console.log(s3); //Anurag Gupta

// console.log(1+"2"); //12
// console.log("1"+2); //12
// console.log(1+2+"5"); //35
// console.log("1"+3+9); //139
// console.log(1+"8"+9); //189

// console.log(true+false);     //1+0=1
// console.log(+true);          //1
// console.log(true+false+"9"); //19
// console.log(+""); //0
// console.log(""); // empty space

// postfix
let a=3;
let b=a++
console.log(a,b);  //a=4 b=3

prefix
let c=5
let d=++c  //
console.log(c,d); //c=6 d=6