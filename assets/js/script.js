// let playerName = document.getElementById('playerName');

// function playerHello () {
// if (playerName.value == String) {
//     playerNameInput.innerHTML = "";
//     playerNameInput.innerHTML = "Hello " + playerName.value + ", Welcome to the JS Quiz. <br>Please Enjoy";  
// } else  alert("Please fill out the name field.");

// }
const startBtn = document.getElementById('startBtn')
const questionAreaElem = document.getElementById('questionArea')

startBtn.addEventListener('click', startQuiz)

function getQuestions (count) {
    for (var i = 0; i < count; i++) {
        console.log(questions[i]);
        //Do something
    }
}

function startQuiz () {
console.log("Quiz is started")
startBtn.classList.add("hide")
questionAreaElem.classList.remove("hide")

}

function getNextQuestion() {

}






