// Hook elements from the page (i.e var exampleEL = document.querySelector(."elementClass")
// console.log(questions);
var displayQuestionEl = querySelector(".display-questions")
var timerEl = document.querySelector(".timer");
var resultsEl = document.querySelector(".results");

// Creeate dynamic elements (i.e. exampleDynamicEL = document.createElement("button"))
var mainDisplay = document.createElement("h3");
var startBtn = document.createElement("button");

// Declare global variables

var timer = 60;
var index = 0;



function openingPage() {
    mainDisplay.textContent = "Press the 'START' button to begin the quiz!"
    startBtn.textContent = "START"
    displayQuestionEl.append(mainDisplay, startBtn)
}

function startQuiz() {



}

function showTimer() {

}

function nextQuestion() {
    

}

function checkAnswer(event) {

}


openingPage();
generateBtn.addEventListener("click", startQuiz)