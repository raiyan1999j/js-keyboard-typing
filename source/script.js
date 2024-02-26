const homepage = document.getElementById('homePage');
const playground= document.getElementById('playground');
const body = document.body;
const playBtn = document.getElementById('playBtn');

body.addEventListener('keyup',(event)=>{
    if(event.key.toLowerCase() == 'enter'){
        currentPageCustom();
    }
});

playBtn.addEventListener('click',currentPageCustom);

function currentPageCustom(event){
    homepage.classList.add('hidden');
    playground.classList.remove('hidden');
}