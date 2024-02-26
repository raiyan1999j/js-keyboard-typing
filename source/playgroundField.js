const keyboard = document.getElementById('keyboard');
const displayBoard = document.getElementById('displayBoard');
const scoreField = document.getElementById('scoreField');
const continueGame=document.getElementById('continueGame');

continueGame.addEventListener('click',()=>{
    const lastScore = Number(document.getElementById('finalScore').innerText);

    document.getElementById('score').innerText = lastScore;
    document.getElementById('life').innerText = 5;


    scoreField.classList.add('hidden');
    playground.classList.remove('hidden');
})

body.addEventListener('keyup',findElement);

body.addEventListener('keyup',(event)=>{
    if(event.key.toLocaleLowerCase() == 'escape'){
        playground.classList.add('hidden');
        scoreField.classList.remove('hidden');
    }
})

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

        document.getElementById('finalScore').innerText = document.getElementById('score').innerText;
    }else{
        document.getElementById(`${condition}`).innerText = convertNum - point

        if(convertNum <= 0){
            playground.classList.add('hidden');
            scoreField.classList.remove('hidden');
        }
    }
}
