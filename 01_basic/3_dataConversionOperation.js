let score=33

console.log(typeof score);
console.log(typeof(score));

//Number Conversion
let Name=""
let isNumber=Number(Name);
console.log(isNumber,typeof isNumber); //NaN(Not An Number) (typeof NaN is number)
let u=undefined
let nu=Number(u);
console.log('nu',nu);

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
console.log(boolenaIs);

/*
1=>true boolean
0=>false boolean
" "=> false boolean
"Anurag"=>true boolean

*/

//String Conversion
let numberS=undefined
let Str=String(numberS)
console.log(Str,typeof Str);

/*
 33=>33 string
 true=true string
 NaN=>NaN string
 null=>null string
 undefined=>undefined string

*/
