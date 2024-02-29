const courses=['js','java','c++','python','swift'];

//simple callback function for for-each()loop..
courses.forEach(function(i){
    // console.log(i);
})

//passing function to forEach loop.................................
function printArray(item,index,array){
    console.log(item,index,array);
}
courses.forEach(printArray)


//arrow function in callback.....
courses.forEach((i)=>{         
    // console.log(i)
}
)

//arrow function..........................................................
// courses.forEach( (a)=>console.log(a))

//forEach has access of item and index and array parameter and more.................................

// courses.forEach((item,index,array)=>console.log(item,index,array))

// courses.forEach((e,i,a)=>console.log(e,i,a))

const arrayObj=[
    {
        language:"JAVASCRIPT",
        languageFileName:"js"
    },

    {
        language:"JAVA",
        languageFileName:"java"
    },

    {
        language:"PYTHON",
        languageFileName:"py"
    }
];
// arrayObj.forEach((item)=>console.log(item.language,item.languageFileName));