const box=document.querySelectorAll('.button');
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