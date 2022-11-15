// DISCLAIMER: This quiz project is inspired by https://youtu.be/riDzcEQbX6k tutorial. 

// variables used in the quiz

const qInfo = document.querySelector('#quizInfo');
const startButn = document.querySelector('#startBtn');
const scoreSec = document.querySelector('#scoreSection');
const scoreInfo = document.querySelector('#score');
const nextButn = document.querySelector('#nextBtn');
const exitButn = document.querySelector('#exitBtn');
const questionAreaElem = document.querySelector('#questionArea');
let questionsShuffle, currentQuesNum;
const quizQuesElem = document.querySelector('#question');
const quizAnsElem = document.querySelector('#answerArea');
let questionNum = document.getElementById("question-num");
let choiceOne = document.querySelector('#answerA')
let choiceTwo = document.querySelector('#answerB')
let choiceThree = document.querySelector('#answerC')
let choiceFour = document.querySelector('#answerD')
const choiceOneButton = document.createElement('button');
const choiceTwoButton = document.createElement('button');
const choiceThreeButton = document.createElement('button');
const choiceFourButton = document.createElement('button');
let correctAnswerIndex = 0;

// event listeners for the Start and the Next Buttons

startButn.addEventListener('click', startQuiz);
nextButn.addEventListener('click', () => {
    currentQuesNum++;
    getNextQuestion();
});
// function to start the quiz

function startQuiz() {
    console.log("Quiz is started");
    qInfo.classList.add("hide"); // Hides the paragrapgh mentioning the number of questions
    scoreSec.classList.remove("hide");
    startButn.classList.add("hide"); // Hides Start Button
    questionsShuffle = questions.sort(() => (Math.random() - 0.5)); //Shuffling of the questions into an array
    currentQuesNum = [0];
    questionAreaElem.classList.remove("hide");

    getNextQuestion();
}

// //function to get to the next question when the Next button is clicked
function getNextQuestion() {
    // clearState();
    showQuizQues(questionsShuffle[currentQuesNum]);
}


// //Function to show the questions from the questions array
function showQuizQues(question) {
    questionNum.innerText = `Question ${currentQuesNum} of 20:`
    quizQuesElem.innerText = question.question; //displays the question text
    choiceOne.innerText = question.choice1;  //displays the answer text
    choiceTwo.innerText = question.choice2;
    choiceThree.innerText = question.choice3;
    choiceFour.innerText = question.choice4;
    choiceOne.addEventListener('click', )
    // question.answers.forEach(answer => { //Looping through the question.answers
    //    const answerButton = document.createElement('button'); // Creating buttons for the answers
//         answerButton.innerText = answer.choice;
//         answerButton.classList.add('btn');
//         if (answer.correct) { // checking if the answer is correct and setting to data attribute to button 
//             answerButton.dataset.correct = answer.correct;

//         }
//         answerButton.addEventListener('click', answerSelect);
//         quizAnsElem.appendChild(answerButton);
//     });
  }
// //Function selects the answer with user's click event

function answerSelect() {
    if(this.innerHTML === questions[0].correct) {
        this.classList.add('btn.correct');
    }
//     const answerSelected = event.target;
//     const correct = answerSelected.dataset.correct;
//     console.log(correct);
//     Array.from(quizAnsElem.children).forEach(answerButton => { //setting the status of the button to correct based on correct answer
//         setQuizStatus(answerButton, answerButton.dataset.correct);

//     });
//     if (questionsShuffle.length > currentQuesNum + 1) {
//         nextButn.classList.remove('hide');
//         exitButn.innerText = 'Exit';
//         exitButn.classList.remove("hide");
//     } else {
//         startButn.innerText = 'Start Again';
//         startButn.classList.remove('hide');
//     }
// }

//function for Incrementing the score
function incrementScore {
    correctAnswerInder++;
    score = (correctAnswerIndex * 1);
    scoreInfo.innerText = score;
    return;
}
// //function which clears the old answers and question
// function clearState() {

//     nextButn.classList.add("hide"); // hides the Next Button
//     exitButn.classList.add("hide"); // hides the Exit Button
//     while (quizAnsElem.firstChild) { // loop to check if any child element to be removed
//         quizAnsElem.removeChild(quizAnsElem.firstChild);

//     }
// }

// // Function which sets the status of the button to correct based on correct answer
// function setQuizStatus(element, correct) {
//     clearQuizStatus(element); // clears old status from the element
//     if (correct) {
//         element.classList.add('correct');

//     } else {
//         element.classList.add('wrong');

//     }
// }

// //Function clears the status of the button
// function clearQuizStatus(element) {

//     element.classList.remove('correct');
//     element.classList.remove('wrong');
// }

// //Function to provide the Exit Button message
// function exitQuiz() {

//     if (confirm("Press 'Ok' to exit Javascript Quiz, or 'Cancel' to stay: ")) {
//         window.location = "https://bijoykm.github.io/jsquiz/";
//     }
// }