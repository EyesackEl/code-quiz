var timerElement = document.querySelector(".timer-number");
var question = document.getElementById("question");
var answerText = document.querySelectorAll(".answer-text");

var startBtn = document.getElementById("start-button");

var timerCount = 60;
var score = 0;

var answerQ1 = false;
var answerQ2 = false;
var answerQ3 = false;

//storing answer sets in an array
var question1 = "Who is the most handsome boy in the world?"
var answers1 = ["Isaac", "The guy who made this quiz", "Mr. LaFlamme", "All of the above"]
var question2 = "This is a test question 2"
var answers2 = ["example2", "example2", "example2", "example2"]
var question3 = "This is a test question 3"
var answers3 = ["example3", "example3", "example3", "example3"]

//starts the timer when called on and prevents negative time
function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount <= 0) {
            clearInterval(timer);
            timerElement.textContent = 0;
        }    
    }, 1000);
}

//starts timer, displays first question and answers,
//and hides start button when pressed
startBtn.addEventListener("click", function() {
    renderQuestion1();
    startTimer();
    startBtn.style.display = "none";
})

//renders the first question and answers when called
function renderQuestion1() {
    //defining local variable for answer boxes
    var answerBoxes = document.querySelectorAll(".answers-0");

    question.textContent =  question1;

    answerBoxes.forEach(element => {
        element.removeAttribute("class", "answers-0");
        element.setAttribute("class", "answers-1");
        for (i = 0; i < answers1.length; i++) {
            answerText[i].textContent = answers1[i];
        }
    });
    
    //listens for user to select and answer
    answerBoxes.forEach(element => {
        element.addEventListener("click", function() {
            //checks if given answer is correct and marks question as answered
            if (element === answerBoxes[3] && !answerQ1) {
                console.log ("correct!");
                answerQ1 = true;
            }else if (!answerQ1) {
                console.log ("nope!");
                answerQ1 = true;
            }
        renderQuestion2();
        })
    })    
}

function renderQuestion2() {
    var answerBoxes = document.querySelectorAll(".answers-1");

    question.textContent =  question2;

    answerBoxes.forEach(element => {
        element.removeAttribute("class", "answers-1");
        element.setAttribute("class", "answers-2");
        for (i = 0; i < answers1.length; i++) {
            answerText[i].textContent = answers2[i];
        }
    });
    
    answerBoxes.forEach(element => {
        element.addEventListener("click", function() {
            if (element === answerBoxes[1] && !answerQ2){
                console.log ("correct!");
                answerQ2 = true;
            }else if (!answerQ2){
                console.log ("nope!");
                answerQ2 = true;
            }
        renderQuestion3();
        })
    })    
}

function renderQuestion3() {
    var answerBoxes = document.querySelectorAll(".answers-2");

    question.textContent =  question3;

    answerBoxes.forEach(element => {
        element.removeAttribute("class", "answers-2");
        element.setAttribute("class", "answers-3");
        for (i = 0; i < answers1.length; i++) {
            answerText[i].textContent = answers3[i];
        }
    });
    
    answerBoxes.forEach(element => {
        element.addEventListener("click", function() {
            if (element === answerBoxes[2] && !answerQ3){
                console.log ("correct!");
                answerQ3 = true;
            }else if (!answerQ3){
                console.log ("nope!");
                answerQ3 = true;
            }
        alert("Quiz Finished");
        })
    })    
}