// Define input fields
let create_quiz = document.getElementById("create-quiz");
let timer = document.getElementById("timer");
let question = document.getElementById("question");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let option5 = document.getElementById("option5");

let obj = {}; // Define obj in the outer scope

document.getElementById("save-btn").addEventListener("click", () => {
    if (create_quiz.value == "" || timer.value == "" || question.value == "" || option1.value == "" || option2.value == "" || option3.value == "" || option4.value == "" || option5.value == "") {
        alert("All input fields are mandatory");
        return;
    }
    
    let questionObj = {
        que: question.value,
        option1: option1.value,
        option2: option2.value,
        option3: option3.value,
        option4: option4.value,
        currectans: option5.value  
    };

    obj = {
        create_quiz: create_quiz.value,
        timer: timer.value,
        questions: []
    };

    obj.questions.push(questionObj);
    console.log(obj, "sdfs");

    // Call adminshowing_data() to save to localStorage
    adminshowing_data();
});

function adminshowing_data() {
    let existing_quiz = JSON.parse(localStorage.getItem("quiz_name")) || [];
    existing_quiz.push(obj);
    localStorage.setItem("quiz_name", JSON.stringify(existing_quiz));
    console.log(existing_quiz, "ramji");

    // Clear input fields after saving
    create_quiz.value = "";
    timer.value = "";
    question.value = "";
    option1.value = "";
    option2.value = "";
    option3.value = "";
    option4.value = "";
    option5.value = "";
}
