const homepage = document.getElementById('homePage');
const body = document.body;
const playBtn = document.getElementById('playBtn');

body.addEventListener('keyup',(event)=>{
    if(event.key.toLowerCase() == 'enter'){
        currentPageCustom();
    }else{
        console.log(event.key)
    }
});

playBtn.addEventListener('click',currentPageCustom);

function currentPageCustom(event){
    homepage.classList.add('hidden')
}