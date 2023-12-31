let quizContainer = [
    {
        question: "What is the capital of India?",
        options: ["Delhi", "Fridabad", "Chandigarh", "Uttar Pradesh"],
        correctOpt: "Delhi",
    },
    {
        question: "What is the Rajdhani of Himachal Pradesh?",
        options: ["Shimla", "Rohru", "Kangra", "Spiti"],
        correctOpt: "Shimla",
    },
    {
        question: "Who is the Prime Minister of India?",
        options: ["Rajat", "Narendra Modi", "Raj", "Rakesh"],
        correctOpt: "Narendra Modi",
    },
];

let currentIndex = 0;
let yourScore = 0;
let questionContainer = document.getElementById("question");
let optionContainer = document.getElementById("options");
let submitButton = document.getElementById("submit");
let scoreParagraph = document.getElementById("scoreboard");

function loadQuiz() {
    let questionText = quizContainer[currentIndex].question;
    questionContainer.innerHTML = questionText;
    optionContainer.innerHTML = "";

    let options = quizContainer[currentIndex].options;

    options.forEach((option) => {
        let optionButton = document.createElement("button");
        optionButton.className = "option";
        optionButton.textContent = option;

        optionButton.addEventListener("click", () => {
            chooseOption(option, optionButton);
        });

        optionContainer.appendChild(optionButton);
    });
}

function chooseOption(option, optionButton) {
    let correctAnswer = quizContainer[currentIndex].correctOpt;

    if (option === correctAnswer) {
        // Set button color to green if the answer is correct
        optionButton.style.backgroundColor = "green";
        yourScore++;
    } else {
        // Set button color to red if the answer is incorrect
        optionButton.style.backgroundColor = "red";
    }

    setTimeout(() => {
        // Reset the button color after a short delay
        optionButton.style.backgroundColor = "";
        currentIndex++;

        if (currentIndex < quizContainer.length) {
            loadQuiz();
        } else {
            alert("Quiz completed successfully");
            resetQuiz();
        }
    }, 1000); // Adjust the delay time as needed

    updateScore();
}

function resetQuiz() {
    yourScore = 0;
    currentIndex = 0;
    scoreParagraph.innerHTML = `Your current score is 0`;
    loadQuiz();
}

function updateScore() {
    scoreParagraph.innerHTML = `Your current score is ${yourScore}`;
}

loadQuiz();
submitButton.addEventListener("click", resetQuiz);
