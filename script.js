const quizContainer   = document.querySelector(".quiz-container");
const answerOptions   = quizContainer.querySelector(".answer-options");
const nextQuestionBtn = quizContainer.querySelector(".next-question-btn");
const questionStatus  = quizContainer.querySelector(".question-status");
const explanationBox  = quizContainer.querySelector(".answer-explanation");
const resultContainer = document.querySelector(".result-container");

// Quiz state
let currentQuestion = null;
const questionsIndexHistory = [];
let correctAnswersCount = 0;
let disableSelection = false;

// Show the final result screen
const showQuizResult = () => {
    document.querySelector(".quiz-popup").classList.remove("active");
    document.querySelector(".result-popup").classList.add("active");
    const resultText = `You answered <b>${correctAnswersCount}</b> out of <b>${questions.length}</b> questions correctly. Great effort!`;
    resultContainer.querySelector(".result-message").innerHTML = resultText;
};

// Pick a random question that hasn't been asked yet
const getRandomQuestion = () => {
    if (questionsIndexHistory.length >= questions.length) {
        return showQuizResult();
    }
    const available = questions.filter((_, i) => !questionsIndexHistory.includes(i));
    const pick = available[Math.floor(Math.random() * available.length)];
    questionsIndexHistory.push(questions.indexOf(pick));
    return pick;
};

// Highlight the correct answer with a check icon
const highlightCorrectAnswer = () => {
    const correctOption = answerOptions.querySelectorAll(".answer-option")[currentQuestion.correctAnswer];
    correctOption.classList.add("correct");
    correctOption.insertAdjacentHTML("beforeend", `<span class="material-symbols-rounded">check_circle</span>`);
};

// Show the explanation blurb
const showExplanation = (isCorrect) => {
    if (!currentQuestion.explanation) return;
    explanationBox.innerHTML = `
        <span class="explanation-icon material-symbols-rounded">${isCorrect ? "lightbulb" : "info"}</span>
        <p>${currentQuestion.explanation}</p>
    `;
    explanationBox.className = "answer-explanation " + (isCorrect ? "correct" : "incorrect");
};

// Handle the user clicking an answer
const handleAnswer = (option, answerIndex) => {
    if (disableSelection) return;
    disableSelection = true;
    const isCorrect = currentQuestion.correctAnswer === answerIndex;
    option.classList.add(isCorrect ? "correct" : "incorrect");
    if (isCorrect) {
        correctAnswersCount++;
    } else {
        highlightCorrectAnswer();
    }
    option.insertAdjacentHTML("beforeend",
        `<span class="material-symbols-rounded">${isCorrect ? "check_circle" : "cancel"}</span>`);
    answerOptions.querySelectorAll(".answer-option").forEach(o => o.style.pointerEvents = "none");
    showExplanation(isCorrect);
    nextQuestionBtn.style.visibility = "visible";
};

// Render the next question
const renderQuestion = () => {
    currentQuestion = getRandomQuestion();
    if (!currentQuestion) return;
    disableSelection = false;
    nextQuestionBtn.style.visibility = "hidden";
    explanationBox.className = "answer-explanation hidden";
    explanationBox.innerHTML = "";
    quizContainer.querySelector(".question-text").textContent = currentQuestion.question;
    questionStatus.innerHTML = `<b>${questionsIndexHistory.length}</b> of <b>${questions.length}</b> Questions`;
    answerOptions.innerHTML = "";
    currentQuestion.options.forEach((opt, i) => {
        const li = document.createElement("li");
        li.classList.add("answer-option");
        li.textContent = opt;
        answerOptions.append(li);
        li.addEventListener("click", () => handleAnswer(li, i));
    });
};

// Start the quiz
const startQuiz = () => {
    document.querySelector(".config-popup").classList.remove("active");
    document.querySelector(".quiz-popup").classList.add("active");
    renderQuestion();
};

// Reset and return to start screen
const resetQuiz = () => {
    correctAnswersCount = 0;
    questionsIndexHistory.length = 0;
    document.querySelector(".config-popup").classList.add("active");
    document.querySelector(".result-popup").classList.remove("active");
};

// Wire up buttons
nextQuestionBtn.addEventListener("click", renderQuestion);
resultContainer.querySelector(".try-again-btn").addEventListener("click", resetQuiz);
document.querySelector(".config-container .start-quiz-btn").addEventListener("click", startQuiz);