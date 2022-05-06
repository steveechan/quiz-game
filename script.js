const p1 = document.getElementById("createquiz");
const p = document.getElementById("makequiz");
const num = document.getElementById("numquestions"); 
const form = document.getElementById("questions");
function create() {
    p.style.display = "none";
    p1.style.display = "block";
}

function begin() {

    let value = document.getElementById("numquestions").value;
    if(value.length > 0 && value != 0) {
        document.getElementById("begin").disabled = false;
        p1.style.display = "none";
        form.style.display ="block";
    }
    else {
        document.getElementById("begin").disabled = true;
    }
}

const questions = [];
const correct = [];
const wrong = [];

function save() {
    const form = document.getElementById("questions");
    let question = document.getElementById("question").value;
    questions.push(question);
    let correctAns = document.getElementById("correctanswer").value;
    correct.push(correctAns);
    let getWrong = form.querySelector('input[name="wrong"]');
    let wrongArr = Array.from(getWrong);
    wrong.push(wrongArr);
    console.log(correct);
    form.reset();

}