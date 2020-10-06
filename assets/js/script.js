// Hook elements from the page (i.e var exampleEL = document.querySelector(."elementClass")
// console.log(questions);

var currentQuestion = 0;
var time = 60
var gameStart = false;
var timerId;
var highScore = 0;
var stopTimer;

var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var startScreen = document.getElementById("start-screen");
var quizQuestion = document.getElementById("quiz-question");
var userSelect = document.querySelectorAll(".user-select");


// Funtion to Hide Questions onStart
function onStart() {
    startScreen.style.display = "none";
}
// Update UI function (display Questions)
function updateUI() {
    timerEl.innerHTML = `Timer ${time}`
    quizQuestion.innerHTML = `${questions[currentQuestion].title}`;


    userSelect.forEach(function(button, index) {
        button.innerHTML = questions[currentQuestion].choices[index];
    })

    

}

// Start Timer
window.setInterval(function () {
    if (gameStart) {
        time -= 1
    }
    //  Stop Timer
    function stopTimer() {
        clearInterval(stopTimer);
    }
    // Call function
    updateUI()
  

}, 1000)
// Functions 
onStart()
// add event listener
startBtn.addEventListener("click", function () {
    gameStart = true

    startQuiz()
    endGameCheck()
})




userSelect.forEach(function(button, index) {

    button.addEventListener('click', function() {
        nextQuestion();
        verifyAnswer(index);
    })
});

// Start Quiz
function startQuiz() {
    startScreen.style.display = "block"

}


// Next question function
function nextQuestion() {
    if (currentQuestion < questions.length) currentQuestion++;
    return;

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
    var currentTime = timerEl
    currentTime -= 15
}
// Function to end game
function endGameCheck() {
    if (currentQuestion > currentQuestion.length && time === 0) {
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
    return highScore + currentTime
}

// clear local storage
localStorage.clear();