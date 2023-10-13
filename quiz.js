const questions = [{
         question:"Which is the largest animal in the world?",
         answers:[
            {text:"Elephant",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Giraffe",correct:false},
            {text:"Panda",correct:false}
         ]
},
{
    question:"Which is pink city in India?",
    answers:[
        {text:"Jaipur",correct:true},
        {text:"Indore",correct:false},
        {text:"Delhi",correct:false},
        {text:"Bengaluru",correct:false}
    ]
},
{
    question:"Which is smallest continent in the world?",
    answers:[
        {text:"Asia",correct:false},
        {text:"Africa",correct:false},
        {text:"Europe",correct:false},
        {text:"Australia",correct:true}
    ]
},
{
    question:"What is the capital of India?",
    answers:[
        {text:"Mumbai",correct:false},
        {text:"Jaipur",correct:false},
        {text:"Delhi",correct:true},
        {text:"Bengaluru",correct:false}
    ]
},
{
    question:"Which animal is called king of Jungle?",
    answers:[
        {text:"Fox",correct:false},
        {text:"Lion",correct:true},
        {text:"Tiger",correct:false},
        {text:"Monkey",correct:false}
    ]
}
];
const questionBtn = document.querySelector(".question");
const answerBtn = document.querySelector(".answer-buttons");
const nextBtn = document.querySelector(".next");
let currentQuestionIndex =0;
let score =0;
 
function startQuiz(){
    currentQuestionIndex =0;
    score=0;
    nextBtn.textContent="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionBtn.textContent = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach((answer)=>{
    const button = document.createElement("button");
    button.textContent=answer.text;
    button.classList.add("btn");
    answerBtn.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click",selectAnswer);

    })
}
function resetState(){
    nextBtn.style.display="none";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}


function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.style.backgroundColor = "green";
       selectedBtn.style.color="black";
        score++;
    } else {
        selectedBtn.style.backgroundColor = "red"; // Set background color to red for incorrect answers
        selectedBtn.style.color="black";
    }

    // Disable all buttons after an answer is selected
    const buttons = answerBtn.querySelectorAll("button");
    buttons.forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.style.backgroundColor = "green"; // Set background color to green for correct answers
        }
    });

    nextBtn.style.display = "block";
}


function showScore(){
resetState();
questionBtn.innerHTML = `You score ${score}out of ${questions.length}!`;
nextBtn.textContent="Play Again";
nextBtn.style.display="block";

}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextBtn.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})


startQuiz();
