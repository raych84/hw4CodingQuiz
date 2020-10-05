// Hook elements from the page (i.e var exampleEL = document.querySelector(."elementClass")
// console.log(questions);

var currentQuestion = 0;
var time = 90
var gameStart = false;
var timerId;
var highScore = 0;
var stopTimer

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var startScreen = document.getElementById("start-screen");
var quizQuestion = document.getElementById("quiz-question");
var userSelect = document.getElementById("user-select1");
var userSelect2 = document.getElementById("user-select2");
var userSelect3 = document.getElementById("user-select3");
var userSelect4 = document.getElementById("user-select4");



// Funtion to Hide Questions onStart
function onStart() {
    startScreen.style.display = "none";
}
// Update UI function
function updateUI() {
    timerEl.innerHTML = `Timer ${time}`
    quizQuestion.innerHTML = `${questions[currentQuestion].title}`;
    userSelect.innerHTML = questions[currentQuestion].choices[0];
    userSelect2.innerHTML = questions[currentQuestion].choices[1];
    userSelect3.innerHTML = questions[currentQuestion].choices[2];
    userSelect4.innerHTML = questions[currentQuestion].choices[3];


}

// Start Timer
window.setInterval(function () {
    if (gameStart) {
        time -= 1
    }
    //  Stop Timer
    function stopTimer() {
        clearInterval(sec);
    }
    // Call function
    updateUI()
    endGameCheck()

}, 1000)
// Functions 
onStart()
// add event listener
startBtn.addEventListener("click", function () {
    gameStart = true

    startQuiz()
})
// Event listener for choices button
userSelect.addEventListener("click", function () {
    nextQuestion()
    verifyAnswer(0)

})
userSelect2.addEventListener("click", function () {
    nextQuestion()
    verifyAnswer(1)
})
userSelect3.addEventListener("click", function () {
    nextQuestion()
    verifyAnswer(2)
})
userSelect4.addEventListener("click", function () {
    nextQuestion()
    verifyAnswer(3)
})


// Start Quiz
function startQuiz() {
    startScreen.style.display = "block"

}


// Next question function
function nextQuestion() {
    currentQuestion++;
}

// Function to add points
function verifyAnswer(answerSelected) {
    if (questions[currentQuestion].answer == questions[currentQuestion].choices[answerSelected]) {
        highScore += 1
    }
    else subtractTime()
    console.log(highScore);
    console.log(questions[currentQuestion].answer)
}


// Function to subtract time if user gets answer wrong
function subtractTime() {
    time -= 15
}
// Function to end game
function endGameCheck() {
    if (currentQuestion > currentQuestion.length && time == 0) {
        endGameCheck() && stopTimer()

    }
}


// Store points (local storage)
var save = {
    highScore: highScore,
}
localStorage.setItem('save', JSON.stringify(save));

// To load
var saveGame = JSON.parse(localStorage.getItem("save"));

// Display final score
function finalScore() {
    finalScore = document.getElementsByClassName("results")
}