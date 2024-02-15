console.log("De-Structure and JSON API");

const course={
    coursename:'Javascript',
    price:2000,
    courseInstructor:"Anurag"
}
//de-structure...............................
const {courseInstructor,price,coursename}=course

console.log(coursename,price,courseInstructor);

//customise the de-structuring
const {courseInstructor:ci,price:p,coursename:cn}=course

console.log(ci);

//.....................JSON...............................
//json demo
// {
//     "id":12345,
//     "name":"Anurag",
//     "email":"anurag@gmail.com"
// }

