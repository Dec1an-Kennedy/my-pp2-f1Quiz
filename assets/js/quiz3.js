const startButton = document.getElementById('start-game-btn')
const nextButton = document.getElementById('next-game-btn')
const questionArea = document.getElementById('question-section')
const answerButton = document.getElementById('answer-btn')
const answerButtonTwo = document.getElementById('answer-btn2')
const questionThree = [
	{
		question:'Williams recently extended the contract on which driver?',
		answer: [
			{text:'Nicholas Latifi', correct: false},
			{text: 'Alex Albon', correct: true}
		]
	},

	{
		question:'who was Lewis Hamiltons teammate when he made his debut?',
		answer: [
			{text:'Jenson Button', correct: false},
			{text: 'Fernando Alonso', correct: true}
		]
	},

	{
		question:'How many points do you get for finishing 7th?',
		answer: [
			{text:'4', correct: false},
			{text: '6', correct: true}
		]
	},

	{
		question:'How many f1 podiums does Albon have?',
		answer: [
			{text:'2', correct: true},
			{text: '4', correct: false}
		]
	},

	{
		question:'Who was on pole for the 2022 British Gp?',
		answer: [
			{text:'Carlos Sainz', correct: true},
			{text: 'Max Verstappen', correct: false}
		]
	}
]



startButton.addEventListener('click', startGame)


function startGame(){
    startButton.classList.add('hide')
    questionArea.classList.remove('hide')
	currentGameIndex = 0
    showQuestions()
}

function showQuestions(){
	questionThree.innerText = question.question
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

function selectedAnswer(){
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