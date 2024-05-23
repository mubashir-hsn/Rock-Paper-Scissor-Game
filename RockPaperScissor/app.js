let boxes = document.querySelectorAll('.box');
let userScorePara = document.querySelector('#user');
let compScorePara = document.querySelector('#comp');
let gameOutput = document.querySelector('#output');
let gameMsg = document.querySelector('.gameOutput');
let ting = new Audio('ting.mp3');
 let userScore = 0;
 let compScore = 0;


// Generate computer choice ....
const genCompChoice = () => {
    let options = ["rock", "paper", "scissor"];
    let rnIdx = Math.floor(Math.random() * 3);
    return options[rnIdx];
}

// Game Draw Function ....
const draw = () => {
    gameOutput.innerText = 'Game was draw! Play again.';
    gameMsg.style.backgroundColor = 'midnightblue';
}

// winner function ...
const showWinner = (userWin ,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        gameOutput.innerText = `You win. Your ${userChoice} beats ${compChoice}.`;
        gameMsg.style.backgroundColor = 'green';
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        gameOutput.innerText = `You lost.${compChoice} beats your ${userChoice}.`;
        gameMsg.style.backgroundColor = 'red';
    }
}

// Play Game function ....
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        draw();
    }
    else {
        let userWin = true;
        if (userChoice === 'rock' && compChoice==='paper') {
           userWin=false;
        }
        
        else if(userChoice==='rock' && compChoice==='scissor') {
            userWin=true;
        }
        else if (userChoice === 'paper'&& compChoice==='rock') {
            userWin=true;
        }
        else if(userChoice==='paper' && compChoice==='scissor') {
            userWin=false;
        }
        else if(userChoice==='scissor' && compChoice==='rock') {
            userWin=false;
        }
        else if(userChoice==='scissor' && compChoice==='paper') {
            userWin=true;
        }

        showWinner(userWin,userChoice,compChoice);
    }
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        ting.play();
        let userChoice = box.getAttribute('id');
        playGame(userChoice);
    })
});

