//forin loop print in the keys form

//for_in on Object..................................................
const myObj={
    1:1,
    2:"two",
    "three":'three',
    'four':4,
}

for (const key in myObj) {

    // console.log('keys',key);

    // console.log('values',myObj[key]);
    console.log(key,myObj[key]);
}

//for_in on array................................................
const arr=[10,20,30,40,50]
for (const key in arr) {
//    console.log(key);
//    console.log(arr[key]);
console.log(key,arr[key]);
}


//fon_in on string...................................................
const s="Anurag is boy"
for (const key in s) {
   console.log(s[key]);
}