// Global Variables:
let time = 90, score = 0, questionNumber = 0, question = questions[questionNumber];
const userSelect = document.querySelectorAll(".user-select");

// Timer Funtions:
const startGameTimer = () => {

    const timerElement = document.getElementById("time");

    const doEverySecond = () => {
        time--;

        if (time <= 0) {
            //Stop timer Function
            time = 0;
            clearInterval(timer);
            endGame();
        }

        timerElement.innerHTML = time;

    }

    const timer = setInterval(doEverySecond, 1000)
};

const deductGameTimer = (amount) => {

    if (amount > time) {
        time = 0
    }
    else time -= amount;
}

// Show Current Question and choices:
const showQuestion = () => {
    document.getElementById("quiz-question").innerHTML = question.title;

    userSelect.forEach((button, index) => {
        button.innerHTML = question.choices[index];
    })

}

// Verify answers selected by user
const userClicksButton = (selected) => {
    const isCorrect = (question.choices[selected] === question.answer);

    // Grabbing Element
    let message = "Correct!";


    if (isCorrect) {
        score++;
    }

    else {
        message = "Incorrect!";
        deductGameTimer(15);
    }

    document.getElementById("indicator").innerHTML = message;


    if (questionNumber < questions.length - 1) {
        questionNumber++;
        question = questions[questionNumber];
        // show next question

        showQuestion();
    }

    else time = 0;


}

// Start Game

const startGame = () => {

    // start timer
    startGameTimer();

    // Hide Start button
    document.getElementById("start").style.display = "none";
    document.getElementById("choice-list").style.display = "block";

    // Display Quiz question(s)
    showQuestion();

    // Event listener for when user makes selection
    userSelect.forEach(function (button, index) {

        button.addEventListener("click", () => {

            userClicksButton(index);

        });

    });

}


const endGame = () => {

    document.getElementById("choice-list").style.display = "none";
    document.getElementById("quiz-question").style.display = "none";
    document.getElementById("indicator").style.display = "none";
    document.getElementById("time").style.display = "none";

    document.getElementById("save-form").style.display = "block";
    document.getElementById("results").innerHTML = `Your score is ${score}!`;

    document.querySelector("#save-form button").addEventListener("click", (event) => {

        event.preventDefault();

        // Get The initials
        const initials = document.querySelector("#save-form input").value;

        if (!initials) return alert("Please enter your initials to save your score.");


        // save score and initials
        const currentHighScore = localStorage.getItem("score");

        if (!currentHighScore || score > currentHighScore) {
            localStorage.setItem("score", score);
            localStorage.setItem("initials", initials);
        }

        // refresh the page
        location.reload();

    });


}


// Display High Score
const currentHighScore = localStorage.getItem("score");
if (currentHighScore) {
    document.getElementById("high-score").innerHTML = `${localStorage.getItem("initials")}: ${currentHighScore}`;
}


// Event listener will start game
document.getElementById("start").addEventListener("click", startGame);