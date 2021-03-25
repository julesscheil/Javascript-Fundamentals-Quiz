// DOM Variables
var questionContainer = document.getElementById("current-question");
var nextQuestionButton = document.getElementById("next-question");


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
var answer = [];
var currentIndex = 0;

// Function Definitions

function displayQuestion() {
    questionContainer.innerHTML = "";
    var questionEl = document.createElement("h1");
    questionEl.textContent = arrayOfQuestions[currentIndex].question;
    // console.log(arrayOfQuestions[currentIndex].choices);
    questionContainer.append(questionEl);


    for (var i = 0; i < arrayOfQuestions[currentIndex].choices.length; i++) {
        console.log(i);
        var choicesEl = document.createElement("li");
        var ulEl = document.createElement("ul");
        choicesEl.textContent = arrayOfQuestions[currentIndex].choices[i];
        choicesEl.setAttribute("type", "button");
        choicesEl.setAttribute("class", "btn btn-primary mybutton btn-block");
        if (arrayOfQuestions[currentIndex].choices[i] == arrayOfQuestions[currentIndex].answers) {
            choicesEl.addEventListener("click", function () {
                // currentIndex++;
                console.log("You clicked the right button");
                if (currentIndex < arrayOfQuestions.length - 1) {
                    currentIndex++;
                } else {

                    return;
                }
                var wrongAnswerEl=document.getElementById("wrong-answer");
                wrongAnswerEl.style.display="none";
                displayQuestion();
            })
        } else {
            choicesEl.addEventListener("click", function () {
                var wrongAnswerEl=document.getElementById("wrong-answer");
                wrongAnswerEl.style.display="block";
                console.log("Wrong");
                // decrement timer
            })
        }
    
    questionContainer.append(ulEl);
    ulEl.append(choicesEl);
}
}
// if current index =5 then call end game function

// end game function 
// display page that has input to save initials 
// should have access to timer as well to show timer
// call end timer function
// button that saves highscores - event listener

// end time function
// clear interval function  (takes parameter named of set interval function)

// set interval function 
// place function towards top and call within displayfunction
// timer -- 

// Event Listeners
document.getElementById("start-button").addEventListener("click", function () {
    document.getElementById("start-page").style.display="none";
    document.getElementById("quiz-content").style.display = "block";
console.log("click");
    // displayQuestion();
})


// Function Calls
displayQuestion();