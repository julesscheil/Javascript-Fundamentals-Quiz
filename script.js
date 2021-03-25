// DOM Variables
var questionContainer = document.getElementById("current-question");
var nextQuestionButton = document.getElementById("next-question");
var timeEl = document.querySelector(".time");

// Javascript Variables

var arrayOfQuestions = [{
        question: "Commonly used data types do not include",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answers: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ___.",
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answers: "curly brackets"
    },
    {
        question: "Arrays in JavaScript can be used to store ___.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answers: "all of the above"
    },
    {
        question: "String values must be enclosed within ___ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answers: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answers: "console.log"
    }
]
// index questions
var currentIndex = 0;
// timer second left
var secondsLeft = 90;

// Function Definitions

// set time function to decrement timer
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
        }

    }, 1000);
}

// function to display the question content
function displayQuestion() {
    questionContainer.innerHTML = "";
    var questionEl = document.createElement("h1");
    questionEl.textContent = arrayOfQuestions[currentIndex].question;
    // console.log(arrayOfQuestions[currentIndex].choices);
    questionContainer.append(questionEl);

    // loop to create buttons as choices
    for (var i = 0; i < arrayOfQuestions[currentIndex].choices.length; i++) {
        console.log(i);
        var choicesEl = document.createElement("li");
        var ulEl = document.createElement("ul");
        choicesEl.textContent = arrayOfQuestions[currentIndex].choices[i];
        choicesEl.setAttribute("type", "button");
        choicesEl.setAttribute("class", "btn btn-primary mybutton btn-block");
        // If correct answer then listen for click to move to next question
        if (arrayOfQuestions[currentIndex].choices[i] == arrayOfQuestions[currentIndex].answers) {
            choicesEl.addEventListener("click", function () {
                // currentIndex++;
                console.log("You clicked the right button");
                // if questions left then move to next question
                if (currentIndex < arrayOfQuestions.length - 1) {
                    currentIndex++;
                    // if no questions left, end game
                } else {
                    endTimer();
                    endGame();

                }
                // keep wrong answer hidden
                var wrongAnswerEl = document.getElementById("wrong-answer");
                wrongAnswerEl.style.display = "none";
                displayQuestion();
            })
            // otherwise if wrong answer, decrement timer and show wrong
        } else {
            choicesEl.addEventListener("click", function () {
                var wrongAnswerEl = document.getElementById("wrong-answer");
                wrongAnswerEl.style.display = "block";
                console.log("Wrong");
                secondsLeft -= 10;
                if (secondsLeft === 0) {
                    // Stops execution of action at set interval
                    clearInterval(timerInterval);
                    // Calls function to create and append image
                    sendMessage();
                }
            })
        }
        // Make buttons list and append to ul
        questionContainer.append(ulEl);
        ulEl.append(choicesEl);
    }
}

// Game should show end game words when done
function endGame() {
    document.getElementById("quiz-content").style.display = "none";
    document.getElementById("end-game").style.display = "block";
}

function endTimer() {

    secondsLeft = "";

}


// Event Listeners

// Listen to start button to start timer and quiz
document.getElementById("start-button").addEventListener("click", function () {
    document.getElementById("start-page").style.display = "none";
    document.getElementById("quiz-content").style.display = "block";
    console.log("click");
    setTime();
    // displayQuestion();
})


// Function Calls

// call questions to display from start
displayQuestion();