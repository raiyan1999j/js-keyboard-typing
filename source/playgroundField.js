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
    const randomNum= Math.floor(Math.random() * 26);
    let randomLetter= letterArr[randomNum];

    if(displayBoard.innerText.toLocaleLowerCase() == word.innerText){
        randomLetter= letterArr[randomNum];
        scoreAndLife('score',1);
    }else{
        randomLetter = displayBoard.innerText;
        scoreAndLife('life',1);
    }

    displayBoard.innerText = randomLetter;
}

function scoreAndLife(condition,point){
    const convertNum = Number(document.getElementById(`${condition}`).innerText);

    if(condition.toLocaleLowerCase() == 'score'){
        document.getElementById(`${condition}`).innerText = convertNum + point
    }else{
        document.getElementById(`${condition}`).innerText = convertNum - point
    }

    if(convertNum <= 0){
        playground.classList.add('hidden');
    }
}