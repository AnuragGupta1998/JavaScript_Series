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
```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit    = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi   = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


```