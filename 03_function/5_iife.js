// Immediately Invoked Function Expression (IIFE)
//IIFE
(function add(){        //named IIFE
        console.log('IIFE Function')
    })
();

(()=>console.log("Second Function"))  //simple IIFE arrow function
();

((name)=> console.log(`${name} is my name`)) //Named IIFE  arrow function
('anurag')


