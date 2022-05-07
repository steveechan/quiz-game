const p1 = document.getElementById("createquiz");
const p = document.getElementById("makequiz");
const num = document.getElementById("numquestions"); 
const form = document.getElementById("questions");
const formquestions = document.getElementById("addquestions");
const quiz = document.getElementById("quiz");
const results = document.getElementById("results");

function create() {
    p.style.display = "none";
    p1.style.display = "block";
}

function begin() {

    let value = document.getElementById("numquestions").value;
    if(value.length > 0 && value != 0) {
        document.getElementById("begin").disabled = false;
        p1.style.display = "none";
        form.style.display = "block";
    }
    else {
        document.getElementById("begin").disabled = true;
    }
}

const questions = [];
const correct = [];
const wrong = [];
let count = 0;
let quizquestion = document.getElementById("h1question");
let correctans = document.getElementById("correct");
let wrong_one = document.getElementById("wrong1");
let wrong_two = document.getElementById("wrong2");
let wrong_three = document.getElementById("wrong3");
const displayquiz = document.getElementById("displayquiz");

function save() {
    const form = document.getElementById("questions");
    let question = document.getElementById("question").value;
    questions.push(question);
    let correctAns = document.getElementById("correctanswer").value;
    correct.push(correctAns);
    const wrongList = form.querySelectorAll('input[name="wrong"]');
    const wrongArr = []
    for(let i = 0; i < wrongList.length; i++) {
        wrongArr.push(wrongList[i].value);
    }
    wrong.push(wrongArr);
    count = count + 1;
    if(count == num.value) {
        form.style.display = "none";
        displayquiz.style.display = "block";
    }
    else {
        form.reset();
    }
}

let numCount = 0;
let wrongCounter = 0;

function start() {
    displayquiz.style.display = "none";
    quiz.style.display = "block";
    quizquestion.innerHTML = "Question: " + questions[numCount];
    correctans.innerHTML = correct[numCount];
    let wrongCounter = 0;
    wrong_one.innerHTML = wrong[numCount][wrongCounter];
    wrong_two.innerHTML = wrong[numCount][wrongCounter+1];
    wrong_three.innerHTML = wrong[numCount][wrongCounter+2];
}

let correctNum = 0;
let wrongNum = 0;
const correctClick = document.getElementById("correct");
function next() {
    numCount++;
    wrongNum++;
    if(numCount == questions.length) {
        quiz.style.display = "none";
        results.style.display = "block";
        c_results.innerHTML = "Correct: " + correctNum + "/" + num.value;
        w_results.innerHTML = "Wrong: " + wrongNum + "/" + num.value;
    }
    else {
        quizquestion.innerHTML = "Question: " + questions[numCount];
        correctans.innerHTML = correct[numCount];
        wrong_one.innerHTML = wrong[numCount][wrongCounter];
        wrong_two.innerHTML = wrong[numCount][wrongCounter+1];
        wrong_three.innerHTML = wrong[numCount][wrongCounter+2];
    }   
}

let c_results = document.getElementById("correctresults");
let w_results = document.getElementById("wrongresults");
function checked() {
    numCount++;
    correctNum++;
    if(numCount == questions.length) {
        quiz.style.display = "none";
        results.style.display = "block";
        c_results.innerHTML = "Correct: " + correctNum + "/" + num.value;
        w_results.innerHTML = "Wrong: " + wrongNum + "/" + num.value;
    }
    else {
        quizquestion.innerHTML = "Question: " + questions[numCount];
        correctans.innerHTML = correct[numCount];
        wrong_one.innerHTML = wrong[numCount][wrongCounter];
        wrong_two.innerHTML = wrong[numCount][wrongCounter+1];
        wrong_three.innerHTML = wrong[numCount][wrongCounter+2];
    }   
}