const startButton = document.getElementById('start-game-btn')
const nextButton = document.getElementById('next-game-btn')
const questionArea = document.getElementById('question-section')
const answerButton = document.getElementById('answer-btn')
const answerButtonTwo = document.getElementById('answer-btn2')
const questionTwo = [
	{
		question:'who won he 2021 drivers championship?',
		answer: [
			{text:'Max Verstappen', correct: true},
			{text: 'Lewis Hamilton', correct: false}
		]
	},

	{
		question:'who drives car number 55?',
		answer: [
			{text:'Lando Norris', correct: false},
			{text: 'Carlos Sainz', correct: true}
		]
	},

	{
		question:'What nationality is Toto Wolff?',
		answer: [
			{text:'German', correct: false},
			{text: 'Austrian', correct: true}
		]
	},

	{
		question:'How many world championships has Fernando Alonso won?',
		answer: [
			{text:'2', correct: true},
			{text: '4', correct: false}
		]
	},

	{
		question:'Who was the team principal for Ferrari in 2022?',
		answer: [
			{text:'Mattia Binotto', correct: true},
			{text: 'Fred Vasseur', correct: false}
		]
	}
]

let currentGameIndex;



startButton.addEventListener('click', startGame)


function startGame(){
    startButton.classList.add('hide')
    questionArea.classList.remove('hide')
	currentGameIndex = 0
    showQuestions()
}

function showQuestions(){
    questionTwo.innerText = question.question
	question.answers.forEach(answer => {
		const button = document.createElement('button')
		button.innerText = answer.text
		button.classList.add('btn')
		if (answer.correct) {
		  button.dataset.correct = answer.correct
		}
		button.addEventListener('click', selectAnswer)
		answerButtonsElement.appendChild(button)
	  })
	
}

answerButton.addEventListener('click', selectedAnswer)
answerButtonTwo.addEventListener('click', selectedAnswer)

function selectedAnswer(e){
    answerButton.classList.add('ans-select')
    nextButton.classList.remove('hide')
	const selectedButton = e.target
  const correct = selectedButton.dataset.correct
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