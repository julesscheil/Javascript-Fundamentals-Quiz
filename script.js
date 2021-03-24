// DOM Variables
var questionContainer=document.getElementById("current-question");
var nextQuestionButton=document.getElementById("next-question");

// Javascript Variables

// var questionObject ={
//     questions:["Question one goes here","Question two here"],
//     choices: ["A","B","C","D"],
//     answers: "A",
// };
var arrayOfQuestions = [
    {
        question: "Commonly used data types do not include",
        choices: ["strings","booleans","alerts","numbers"],
        answers: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ___.",
        choices: ["quotes","curly brackets","parenthesis","square brakcets"],
        answers: "curly brackets"
    },
    {
        question: "Arrays in JavaScript can be used to store ___.",
        choices: ["numbers and strings","other arrays","booleans","all of the above"],
        answers: "all of the above"
    },
    {
        question: "String values must be enclosed within ___ when being assigned to variables.",
        choices: ["commas","curly brackets","quotes","parenthesis"],
        answers: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript","terminal/bash","for loops","console.log"],
        answers: "console.log"
    }
]
var currentIndex = 0;

// Function Definitions

function displayQuestion() {
    questionContainer.innerHTML="";
    var questionEl = document.createElement("h1");
    questionEl.textContent=arrayOfQuestions[currentIndex].question;
    console.log(arrayOfQuestions[currentIndex].question);
    // console.log(arrayOfQuestions[currentIndex].choices);
    questionContainer.append(questionEl);

    

    for (var i =0; i<arrayOfQuestions[currentIndex].choices.length; i++) {
    var choicesEl = document.createElement("p");
    choicesEl.textContent = arrayOfQuestions[currentIndex].choices[i];
    questionContainer.append(choicesEl);
    }
}

// Event Listeners

nextQuestionButton.addEventListener("click", function() {
    console.log("You clicked the button");
    if(currentIndex < arrayOfQuestions.length - 1) {
        currentIndex++;
    } else {
        // console.log("highscores here");
        return;
    }

    displayQuestion();
})

// Function Calls
displayQuestion();