//creating Promise()
const promiseCreated=new Promise((resolve,reject)=>{

    setTimeout(()=>{

      let error=true;
      if(!error){
         console.log('resolve promise');
         resolve({username:'Anurag',age:25})
        }
     else{
         console.log('rejected the promise');
         reject("Failed to get username ")
        }
    },1000)
    
});

//consuming promise using async await keyword...........
async function consumingPromise(){
    try{
    const response=await promiseCreated
    console.log(response);

    }
    catch(err){
      console.log("ERROR:-",err);
    }
}
consumingPromise(); //calling function
