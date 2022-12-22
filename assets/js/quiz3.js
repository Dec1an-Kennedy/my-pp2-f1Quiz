const startButton = document.getElementById('start-game-btn')
const nextButton = document.getElementById('next-game-btn')
const questionArea = document.getElementById('question-section')
const answerButton = document.getElementById('answer-btn')
var quizQuestions = [
	{
		question: "What is 10/2?",
		answers: {
			a: '3',
			b: '5',
			c: '115'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is 30/3?",
		answers: {
			a: '3',
			b: '5',
			c: '10'
		},
		correctAnswer: 'c'
	}
];



startButton.addEventListener('click', startGame)


function startGame(){
    startButton.classList.add('hide')
    questionArea.classList.remove('hide')
    showQuestions()
}

function showQuestions(){
    
}

answerButton.addEventListener('click', selectedAnswer)

function selectedAnswer(){
    answerButton.classList.add('ans-select')
    nextButton.classList.remove('hide')
}

nextButton.addEventListener('click', nextQuestion)

function nextQuestion(){
    resetState()
}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function resetState(){
	nextButton.classList.add('hide')
	answerButton.classList.remove('ans-select')
}