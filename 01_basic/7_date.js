let myDate=new Date()
console.log(myDate); //2024-02-10T11:08:11.830Z
console.log(myDate.toString()); //Sat Feb 10 2024 16:41:45 GMT+0530 (India Standard Time)
console.log(myDate.toISOString()); //2024-02-10T11:12:02.760Z
console.log(myDate.toJSON());
console.log(myDate.toDateString()); //Sat Feb 10 2024
console.log(myDate.toLocaleDateString()); // 2/10/2024
console.log(myDate.toLocaleTimeString()); //4:43:17 PM 
console.log(myDate.getTime());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleString());

//creating own date
let createMyDate=new Date(2023,0,11);
// console.log(createMyDate.toLocaleDateString());

let createDate=new Date(2023,0,23,5,2)
// console.log(createDate.toDateString());

//right datatime
let nowDate=new Date()
console.log(nowDate.toLocaleDateString()); //2/10/2024   m-2 d-10 y-2024
console.log(nowDate.toLocaleTimeString()); //current time
console.log(nowDate.getDate()); //date
console.log(nowDate.getMonth()+1); //month
console.log(nowDate.getFullYear());//year