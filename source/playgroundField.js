const keyboard = document.getElementById('keyboard');
const displayBoard = document.getElementById('displayBoard');
const scoreField = document.getElementById('scoreField');
const continueGame=document.getElementById('continueGame');

continueGame.addEventListener('click',()=>{
    const lastScore = Number(document.getElementById('finalScore').innerText);

    document.getElementById('score').innerText = lastScore;
    document.getElementById('life').innerText = 5;

    hideShow(scoreField,'add','hidden');
    hideShow(playground,'remove','hidden');
})

body.addEventListener('keyup',findElement);

body.addEventListener('keyup',(event)=>{
    if(event.key.toLocaleLowerCase() == 'escape'){
        hideShow(playground,'add','hidden');
        hideShow(scoreField,'remove','hidden');
    }
})

randomWord();


function findElement(event){
    const lowerCase = event.key.toLowerCase();
    const targetElement= document.getElementById(`${lowerCase}`);
    
    for(let repeat of keyboard.childNodes[1].children){
        for(let iteration of repeat.children){
            hideShow(iteration,'remove','bg-yellow-500');
            hideShow(iteration,'add','bg-white');
        }
    }

    hideShow(targetElement,'add','bg-yellow-500');
    hideShow(targetElement,'remove','bg-white');

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

        document.getElementById('finalScore').innerText = document.getElementById('score').innerText;
    }else{
        document.getElementById(`${condition}`).innerText = convertNum - point

        if(convertNum <= 0){
            hideShow(playground,'add','hidden');
            hideShow(scoreField,'remove','hidden');
        }
    }
}

function hideShow(element,position,condition){
    switch(position){
        case 'add' :
            element.classList.add(`${condition}`);
        break;
        case 'remove':
            element.classList.remove(`${condition}`);
        break;
    }
}