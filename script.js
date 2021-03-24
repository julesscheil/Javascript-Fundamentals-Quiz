//DOM Variables
var questionContainer=document.getElementById("current-question");
var nextQuestionButton=document.getElementById("next-question");

//Javascript Variables

var questionOne ={
    question:"Question goes here",
    choices: ["A","B","C","D"],
    answers: "A",
};

//Function Definitions
function displayQuestion() {
    var questionEl = document.createElement("h1");
    questionEl.textContent=questionOne.question;
    questionContainer.append(questionEl);
}
//Event Listeners
nextQuestionButton.addEventListener("click", function() {
    console.log("You clicked the button");
})
//Function Calls
displayQuestion();