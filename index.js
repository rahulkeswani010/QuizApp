const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "Javascript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars Suvs sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "None of the Above",
    correct: "a",
  },
  {
    question: "Who has won all the three ICC Trophies?",
    a: "Mahendra Singh Dhoni",
    b: "Rahul Dravid",
    c: "Sachin Tendulkar",
    d: "Sourav Ganguly",
    correct: "a",
  },
];
const quiz=document.querySelector("#quiz");
const answerElements=document.querySelectorAll(".answer");
const questionElement=document.querySelector("#question");
const a_text=document.querySelector("#a_text");
const b_text=document.querySelector("#b_text");
const c_text=document.querySelector("#c_text");
const d_text=document.querySelector("#d_text");
const submitBtn=document.querySelector("#submit");

let CurrentQuiz=0;
let score=0;
loadQuiz();

function loadQuiz(){
    deselectaAnswers();
    const CurrentQuizData=quizData[CurrentQuiz];
    questionElement.innerText=CurrentQuizData.question;
    a_text.innerText=CurrentQuizData.a;
    b_text.innerText=CurrentQuizData.b;
    c_text.innerText=CurrentQuizData.c;
    d_text.innerText=CurrentQuizData.d;
    
}
function deselectaAnswers(){
    answerElements.forEach(answerElement=>answerElement.checked=false);
}
function getSelected(){
    let answer;
    answerElements.forEach(answerElement=>{
        if(answerElement.checked){
            answer=answerElement.id
        }
    })
    return answer;
}
submitBtn.addEventListener("click",()=>{
    const answer=getSelected();
    console.log(answer);
    if(answer===quizData[CurrentQuiz].correct)
    {
        score++;
    }
    CurrentQuiz++;
    if(CurrentQuiz<quizData.length){
        loadQuiz();
    }
    else{
        quiz.innerHTML=`<h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>
        `

    }
})