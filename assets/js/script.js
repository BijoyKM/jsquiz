// let playerName = document.getElementById('playerName');

// function playerHello () {
// if (playerName.value == String) {
//     playerNameInput.innerHTML = "";
//     playerNameInput.innerHTML = "Hello " + playerName.value + ", Welcome to the JS Quiz. <br>Please Enjoy";  
// } else  alert("Please fill out the name field.");

// }
const startButn = document.querySelector('#startBtn')
const nextButn = document.querySelector('#nextBtn')
const questionAreaElem = document.querySelector('#questionArea')
let questionsShuffle, currentQuesNum
const quizQuesElem = document.querySelector('#question')
const quizAnsElem = document.querySelector('#answerArea')




startButn.addEventListener('click', startQuiz)
nextButn.addEventListener('click', () => {
    currentQuesNum++
    getNextQuestion()
})

// function getQuestions (count) {
//     for (var i = 0; i < count; i++) {
//         console.log(questions[i]);
//         //Do something
//     }
// }

function startQuiz () {
console.log("Quiz is started")
startButn.classList.add("hide")
questionsShuffle = questions.sort(() => (Math.random() - .5))
currentQuesNum = 0
questionAreaElem.classList.remove("hide")
getNextQuestion ()
}

function getNextQuestion() {
    clearState()
showQuizQues(questionsShuffle[currentQuesNum])
}

function showQuizQues (question) {
    quizQuesElem.innerText = question.question
    question.answers.forEach(answer => {
        const answerButton = document.createElement('button')
        answerButton.innerText = answer.choice
        answerButton.classList.add('btn')
        if(answer.correct) {
            answerButton.dataset.correct = answer.correct
        }
        answerButton.addEventListener('click', answerSelect)
        quizAnsElem.appendChild(answerButton)
    })
}

function answerSelect(event) {
const answerSelected = event.target
const correct = answerSelected.dataset.correct
console.log(correct)
setQuizStatus(document.body, correct)
Array.from(quizAnsElem.children).forEach(answerButton => {
    setQuizStatus(answerButton, answerButton.dataset.correct)
})
if(questionsShuffle.length > currentQuesNum + 1) {
nextButn.classList.remove('hide')
} else {
    startButn.innerText = 'Try Again'
    startButn.classList.remove('hide')
}
}
function clearState () {
    nextButn.classList.add("hide")
    while (quizAnsElem.firstChild) {
        quizAnsElem.removeChild(quizAnsElem.firstChild)
        
    }
}

function setQuizStatus(element, correct) {
    clearQuizStatus(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearQuizStatus(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


