# project to test javascript

## project names

### 1:- colorChange code
```javascript


//getting all the boxes
const box=document.querySelectorAll('.button');
//getting body to target body
const body=document.body

//querySelectAll gives NodeList
box.forEach((b)=>{
    console.log(b);
    b.addEventListener('click',(e)=>{
        console.log(e.target.id);
        switch(e.target.id){
            case 'green':
                body.style.backgroundColor=e.target.id
                break;
            case'yellow':
                body.style.backgroundColor=e.target.id
                break;
            case'blue':
                body.style.backgroundColor=e.target.id
                break;
            case'red':
                body.style.backgroundColor=e.target.id
                break;
            
            default:
                body.style.backgroundColor="cyan"
            
        }
    })
})
```
### 2:-BMICalculator
```javascript

//getting form element
const form=document.querySelector('form');

form.addEventListener('submit',(e)=>{
    //stop default behaviour of sumbit of form
    e.preventDefault();

    //converting into integer and storing its value in variable......
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)

    //getting result variable............
    const result=document.querySelector('#result');

    //checks on input of input form...............
    if(height==='' || height<0 || isNaN(height)){
        
        result.innerHTML=`<h4>please provide valid height ${height} </h4>`

    }
    
    else if(weight=== '' || weight<0 || isNaN(weight)){

        result.innerHTML=`<h4>please provide valid weight ${weight} </h4>`

    }
    else{
      
        const bmi=(weight/((height*height)/10000)).toFixed(2); //for two decimal values
        //showing result
        // result.innerHTML=`<h1>${bmi}</h1>`
       
        if(bmi<18.6){
         result.innerHTML=`<h4>under weighted ${bmi} </h4>`
        }
        else if(bmi<24.9){
         result.innerHTML=`<h4>normal weighted ${bmi} </h4>`
        }
        else{
            result.innerHTML=`<h4>over weighted ${bmi} </h4>`
        }


    }

})
```
### 3:-DigitalClock
```javascript
//getting clock reference................
const clock=document.getElementById('clock');



setInterval(() => {
    const date = new Date();

    clock.innerHTML=date.toLocaleTimeString('en-IT')  //en-IT for showing AM or PM

},1000); //1000 mili second = 1 second 
```
### 4:-GuessTheNumber