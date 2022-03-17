// const startbutton=document.getElementById('start-btn')
// const nextbutton=document.getElementById('next-btn')

// const questionContainer=document.getElementById('question-container')
// const questionElements=document.getElementById('question')
// const answerButtonElements=document.getElementById('answer-buttons')
// let shuffleQuestion,currentQuestionsIndex;

// startbutton.addEventListener('click',startgame)

// nextbutton.addEventListener('click',()=>{
// currentQuestionsIndex++
// setNextQuestion()
// })



// function startgame() 
// {
//   // console.log("shnsh");
//   startbutton.classList.add('hide')
//   shuffleQuestion=questions.sort(() => Math.random() - .5)
//   currentQuestionsIndex=0
// questionContainer.classList.remove('hide')
// setNextQuestion()
// }


// function setNextQuestion() {
//   resetState()
//   showQuestion(shuffleQuestion[currentQuestionsIndex])
// }
// function showQuestion(question) {
// //   questionElements.innerText=question.question;
// // question.answer.forEach(answer => {
// // const button=document.createElement('button')
// // button.innerText=answer.text 
// // button.classList.add('btn')
// // if(answer.correct){
// //   button.dataset.correct=answer.correct
// // }
// // button.addEventListener('click',selectAnswer)
// // answerButtonElements.appendChild(button)
// // });

// questionElement.innerText = question.question
// question.answers.forEach(answer => {
//   const button = document.createElement('button')
//   button.innerText = answer.text
//   button.classList.add('btn')
//   if (answer.correct) {
//     button.dataset.correct = answer.correct
//   }
//   button.addEventListener('click', selectAnswer)
//   answerButtonsElement.appendChild(button)
// })
// }

// function resetState() {
//   clearStatusClass(document.body)
//   nextbutton.classList.add('hide')
//   while(answerButtonElements.firstChild){
//     answerButtonElements.removeChild(answerButtonElements.firstChild)
// }
// }

//   function selectAnswer(e) {
//     const selectedButtons=e.target
//     const correct= selectedButtons.dataset.correct
//     setStatusClass(document.body,correct)
//     Array.from(answerButtonElements.children).forEach(button =>{
//       setStatusClass(button,button.dataset.correct)
//   });

//   if(shuffleQuestion.length>currentQuestionsIndex+1){
//     nextbutton.classList.remove('hide')  
//   }
//   else{
//     startbutton.innerHTML="restart"
//     startbutton.classList.remove('hide')
//   }
//   }


// function setStatusClass(element,correct) {
//   clearStatusClass(element)
//   if(correct){
//     element.classList.add('correct')
//   }else{
//     element.classList.add('wrong')

//   }
// }
// function clearStatusClass(element) {
//   element.classList.remove('correct')
//   element.classList.remove('wrong')
  
// }



// const questions=[{
//   question:"what is 2+2",
//   answers:[
//     {text:"4",correct:true},
//     {text:"6",correct:false},

//   ],
// },
// {
//   question:"what is 5+2",
//   answers:[
//     {text:"7",correct:true},
//     {text:"68",correct:false},

//   ],
// },
// ];
///sacbuhgdsjkbgedfbug


const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
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

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  }
]

















