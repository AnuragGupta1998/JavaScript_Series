//fetch data grom github by then() and catch...................................
fetch('https://api.github.com/users/AnuragGupta1998')
.then((data)=>{      //then() return promise
    console.log(typeof data); //object
    const response=data.json()
    
    console.log(response);    //Promise { <pending> }
    return response
})
.then((response)=>{    //this the() handle the response Promise object
    console.log(response);   //here i get all about github user
})
.catch(err=>console.log(err))

