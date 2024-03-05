//getting clock reference................
const clock=document.getElementById('clock');



setInterval(() => {
    const date = new Date();

    clock.innerHTML=date.toLocaleTimeString('en-IT')  //en-IT for showing AM or PM

},1000); //1000 mili second = 1 second 