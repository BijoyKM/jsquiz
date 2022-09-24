// let playerName = document.getElementById('playerName');

// function playerHello () {
// if (playerName.value == String) {
//     playerNameInput.innerHTML = "";
//     playerNameInput.innerHTML = "Hello " + playerName.value + ", Welcome to the JS Quiz. <br>Please Enjoy";  
// } else  alert("Please fill out the name field.");

// }
const startButn = document.getElementById('startBtn')
const questionAreaElem = document.getElementById('questionArea')
let questionsShuffle, currentQuesNum
const quizQuesElem = document.getElementById('question')
const quizAnsElem = document.getElementById('answerArea')




startButn.addEventListener('click', startQuiz)

function getQuestions (count) {
    for (var i = 0; i < count; i++) {
        console.log(questions[i]);
        //Do something
    }
}

function startQuiz () {
console.log("Quiz is started")
startButn.classList.add("hide")
questionsShuffle = questions.sort(() => (Math.random() - .5))
currentQuesNum = 0
questionAreaElem.classList.remove("hide")
getNextQuestion ()
}

function getNextQuestion() {
showQuizQues(questionsShuffle[currentQuesNum])
}

function showQuizQues (question) {
    quizQuesElem.innerText = question.question
}






