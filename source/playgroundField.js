const keyboard = document.getElementById('keyboard');
const displayBoard = document.getElementById('displayBoard');

body.addEventListener('keyup',findElement);

randomWord();


function findElement(event){
    const lowerCase = event.key.toLowerCase();
    const targetElement= document.getElementById(`${lowerCase}`);
    
    for(let repeat of keyboard.childNodes[1].children){
        for(let iteration of repeat.children){
            iteration.classList.remove('bg-yellow-500');
            iteration.classList.add('bg-white')
        }
    }

    targetElement.classList.add('bg-yellow-500');
    targetElement.classList.remove('bg-white');

    randomWord(targetElement);
}

function randomWord(word){
    const alphabet ='abcdefghijklmnopqrstuvwxyz';
    const letterArr= alphabet.split("");
    const randomNum= Math.floor(Math.random() * 27);
    let randomLetter= letterArr[randomNum];

    if(displayBoard.innerText.toLocaleLowerCase() == word.innerText){
        randomLetter= letterArr[randomNum];
    }else{
        console.log('not match')
    }

    displayBoard.innerText = randomLetter;
}