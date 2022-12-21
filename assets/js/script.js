const startButton = document.getElementById('start-game-btn')
const nextButton = document.getElementById('next-game-btn')
const questionArea = document.getElementById('question-section')
const answerButton = document.getElementById('answer-btn')
let correctScore = document.getElementById('score')
let incorrectAnswer = document.getElementById('incorrect')

const quizData = [
    {

    }
]


startButton.addEventListener('click', startGame)


function startGame(){
    startButton.classList.add('hide')
    questionArea.classList.remove('hide')
}

answerButton.addEventListener('click', selectedAnswer)

function selectedAnswer(){
    answerButton.classList.add('ans-select')
    nextButton.classList.remove('hide')
}

nextButton.addEventListener('click', nextQuestion)

function nextQuestion(){
    nextButton.classList.add('hide')
}

function incrementScore(){
   
}


