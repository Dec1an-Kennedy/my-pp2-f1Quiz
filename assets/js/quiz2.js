const startButton = document.getElementById('start-game-btn')
const nextButton = document.getElementById('next-game-btn')
const questionArea = document.getElementById('question-section')
const answerButton = document.getElementById('answer-btn')
const answerButtonTwo = document.getElementById('answer-btn2')
const questionTwo = [
	{
		question:'what was the most recent season to have 11 teams compete?',
		answer: [
			{text:'2016', correct: true},
			{text: '2018', correct: false}
		]
	},

	{
		question:'who was world drivers champion in 2006?',
		answer: [
			{text:'Sebastian Vettle', correct: false},
			{text: ' Fernando Alonso', correct: true}
		]
	},

	{
		question:'How many points do you get for winning a rtace?',
		answer: [
			{text:'25', correct: true},
			{text: '20', correct: false}
		]
	},

	{
		question:'who won the 2022 Spanish Gp?',
		answer: [
			{text:'Max Verstappen', correct: true},
			{text: 'Charles Leclerc', correct: false}
		]
	},

	{
		question:'whoi was World drivers champion in 2008?',
		answer: [
			{text:'Lewis Hamilton', correct: true},
			{text: 'Fernando Alonso', correct: false}
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