//creating Promise
//first promise object
const promise=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async Task1');
    },1000);
    
    resolve('anurag'); //if Promise is resolve then control goes to then()function passing data to then() function
    
    // reject('failed)   //if promise is rejected then control goes to catch() function
})

promise.then((x)=>console.log('successful one',x)).catch((x)=>console.log('failed',x))

//second promise object..........................................................
new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("async task2");
        resolve()
    },1000)
}).then((x)=>console.log("successfully2 complete async task 2"));

//third promise.........................................................................
const thirdPromise=new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log("third promise problem");
        resolve({username:'anurag',age:25});
    },1000)
})

thirdPromise.then((val)=>console.log(val))

//4th promise.............................................................................
const fourPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('4th promise task');
        let error=true;
        if(!error){
            resolve({username:'ashutosh',age:20})  //passing data to then()function
        }
        else{
            // reject({error:'rejected error occur'}) //passing data to catch() function
            reject('error comes in 4th promise')
        }
    },1000)
})
fourPromise.then((val)=>console.log(val)).catch((err)=>console.log(err)).finally(()=>console.log('4th finally block alway execute either resolve or reject'))

const promise5=new Promise((resolve,reject)=> {
    let error=true;

    if(!error){
        resolve({name:'hemant',age:28})
    }
    else{
        reject('ERROR:js went wrong')
    }
})
promise5.then((x)=>console.log(x)).catch((err)=>console.log(err))

