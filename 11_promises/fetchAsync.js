//fetch the github data by async function 

async function fetchData(){
    try{
    const userData = await fetch('https://api.github.com/users/AnuragGupta1998'); //fetch retuns string type data
    console.log(typeof userData);
    // const response = await userData.json()
    // console.log(response);
    }
    catch(err){
        console.log("error",err);
    }

}
fetchData()
