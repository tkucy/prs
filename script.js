const aiChoiceDisplay = document.getElementById('ai-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const showResult = document.getElementById('result');
let playerChoice;
let aiChoice;
let result;
const allChoices = document.querySelectorAll('button');
allChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id
    playerChoiceDisplay.innerHTML = playerChoice
    aiChoiceCreate()
}))

function aiChoiceCreate() {
    const randNumber = Math.floor(Math.random()*3+1)
    
    if(randNumber === 1) {
        aiChoice = 'paper'
    }
    if(randNumber === 2) {
        aiChoice = 'rock'
    }
    if(randNumber === 3) {
        aiChoice = 'scissors'
    }
    aiChoiceDisplay.innerHTML = aiChoice
    getResult()
}
function getResult() {
    if(playerChoice === aiChoice) {
        result = "It's a draw"
    }
    if(playerChoice == 'paper' && aiChoice == 'rock') {
        result = 'You win!'
    }
    if(playerChoice == 'rock' && aiChoice == 'paper') {
        result = 'You lost!'
    }
    if(playerChoice == 'scissors' && aiChoice == 'paper') {
        result = 'You win!'
    }
    if(playerChoice == 'paper' && aiChoice == 'scissors') {
        result = 'You lost!'
    }
    if(playerChoice == 'rock' && aiChoice == 'scissors') {
        result = 'You win!'
    }
    if(playerChoice == 'scissors' && aiChoice == 'rock') {
        result = 'You lost!'
    }
    showResult.innerHTML = result
}