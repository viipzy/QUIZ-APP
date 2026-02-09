const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Multi Language",
      "None",
    ],
    answer: 0,
  },
  {
    question: "What does CSS do?",
    options: ["Structure", "Style", "Logic", "Database"],
    answer: 1,
  },
  // ADD MORE QUESTIONS UP TO 50
];

let currentIndex = 0;
let timer = 15;
let interval;
let score = 0;
let answered = false;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("timer");
const progressEl = document.getElementById("progress");
const nextBtn = document.getElementById("nextBtn");
const skipBtn = document.getElementById("skipBtn");


function loadQuestion() {
  clearInterval(interval);
  timer = 15;
  answered = false;
  nextBtn.disabled = true;

  const q = questions[currentIndex];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  progressEl.textContent = `Question ${currentIndex + 1} of ${questions.length}`;

  q.options.forEach((opt, i) => {
    const div = document.createElement("div");
    div.textContent = opt;
    div.className = "option";
    div.onclick = () => selectOption(div, i);
    optionsEl.appendChild(div);
  });

  updateNextButton();
  startTimer();
}


function startTimer() {
  timerEl.textContent = timer + "s";

  interval = setInterval(() => {
    timer--;
    timerEl.textContent = timer + "s";

    if (timer === 0) {
      clearInterval(interval);
      revealCorrectAnswer();
    }
  }, 1000);
}


function selectOption(element, index) {
  if (answered) return;
  answered = true;
  clearInterval(interval);
  revealCorrectAnswer(index);
}


function revealCorrectAnswer(selectedIndex = null) {
  answered = true;
  nextBtn.disabled = false;

  const correct = questions[currentIndex].answer;
  const options = document.querySelectorAll(".option");

  options.forEach((opt, i) => {
    opt.style.pointerEvents = "none";

    if (i === correct) {
      opt.classList.add("correct");
    }

    if (selectedIndex !== null && i === selectedIndex && i !== correct) {
      opt.classList.add("wrong");
    }
  });

  if (selectedIndex === correct) score++;
}


function updateNextButton() {
  if (currentIndex === questions.length - 1) {
    nextBtn.textContent = "Submit";
    nextBtn.classList.add("submit");
  } else {
    nextBtn.textContent = "Next";
    nextBtn.classList.remove("submit");
  }
}

nextBtn.onclick = () => {
  currentIndex++;

  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    localStorage.setItem("quizScore", score);
    window.location.href = "result.html";
  }
};


skipBtn.onclick = () => {
  if (answered) return;
  clearInterval(interval);
  revealCorrectAnswer();
};


loadQuestion();
