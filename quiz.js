const questions = [
  // HTML & CSS
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
    ],
    answer: 0,
  },
  {
    question: "Which HTML tag is used for the largest heading?",
    options: ["<heading>", "<h6>", "<h1>", "<head>"],
    answer: 2,
  },
  {
    question: "Which property is used to change text color in CSS?",
    options: ["font-color", "text-color", "color", "fgcolor"],
    answer: 2,
  },

  {
    question: "Which CSS property controls text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    answer: 2,
  },
  {
    question: "Which tag is used to create a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    answer: 0,
  },
  {
    question: "Which CSS property is used to make text bold?",
    options: ["font-weight", "font-style", "text-bold", "weight"],
    answer: 0,
  },
  {
    question: "Which HTML attribute specifies an image source?",
    options: ["src", "href", "link", "path"],
    answer: 0,
  },
  {
    question: "Which CSS property adds space inside an element?",
    options: ["margin", "padding", "spacing", "border"],
    answer: 1,
  },
  {
    question: "Which HTML tag is used to create a list?",
    options: ["<ul>", "<li>", "<ol>", "All of the above"],
    answer: 3,
  },
  {
    question: "Which CSS display value hides an element?",
    options: ["none", "hidden", "block", "opacity"],
    answer: 0,
  },
  {
    question: "Which tag is used for line break?",
    options: ["<break>", "<lb>", "<br>", "<line>"],
    answer: 2,
  },
  {
    question: "Which CSS property controls element width?",
    options: ["size", "length", "width", "scale"],
    answer: 2,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Colorful Style Sheets",
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
    ],
    answer: 2,
  },
  {
    question: "Which HTML tag contains metadata?",
    options: ["<meta>", "<head>", "<title>", "<body>"],
    answer: 1,
  },
  {
    question: "Which CSS property aligns text?",
    options: ["align", "text-align", "position", "justify"],
    answer: 1,
  },

  // JavaScript
  {
    question: "Which keyword declares a variable in JavaScript?",
    options: ["var", "int", "string", "let"],
    answer: 0,
  },
  {
    question: "Which symbol is used for comments?",
    options: ["//", "<!-- -->", "#", "**"],
    answer: 0,
  },
  {
    question: "How do you write an alert?",
    options: ["msg()", "alertBox()", "alert()", "message()"],
    answer: 2,
  },
  {
    question: "Which operator is used to assign value?",
    options: ["=", "==", "===", ":"],
    answer: 0,
  },
  {
    question: "Which method converts JSON to object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.object()",
      "JSON.convert()",
    ],
    answer: 0,
  },
  {
    question: "Which keyword stops a loop?",
    options: ["exit", "stop", "break", "return"],
    answer: 2,
  },
  {
    question: "Which function runs after page loads?",
    options: ["onload", "ready", "window.onload", "pageLoad"],
    answer: 2,
  },
  {
    question: "Which data type is NOT primitive?",
    options: ["string", "number", "object", "boolean"],
    answer: 2,
  },
  {
    question: "How do you select element by ID?",
    options: [
      "getElementById()",
      "querySelectorAll()",
      "getElementsByClass()",
      "selectId()",
    ],
    answer: 0,
  },
  {
    question: "Which loop runs at least once?",
    options: ["for", "while", "do...while", "foreach"],
    answer: 2,
  },
  {
    question: "Which keyword creates a function?",
    options: ["func", "function", "def", "method"],
    answer: 1,
  },
  {
    question: "Which operator compares value & type?",
    options: ["==", "!=", "===", "="],
    answer: 2,
  },
  {
    question: "Which array method adds an item?",
    options: ["push()", "add()", "insert()", "append()"],
    answer: 0,
  },
  {
    question: "Which event fires on button click?",
    options: ["onhover", "onchange", "onclick", "onpress"],
    answer: 2,
  },
  {
    question: "Which method removes last array item?",
    options: ["pop()", "shift()", "remove()", "delete()"],
    answer: 0,
  },
  {
    question: "What does NaN mean?",
    options: [
      "Not a Name",
      "No assigned Number",
      "Not a Number",
      "Null and None",
    ],
    answer: 2,
  },
  {
    question: "Which keyword creates constant?",
    options: ["var", "let", "const", "static"],
    answer: 2,
  },
  {
    question: "Which object handles dates?",
    options: ["Time", "Clock", "Date", "Moment"],
    answer: 2,
  },
  {
    question: "Which method joins array items?",
    options: ["join()", "merge()", "combine()", "concat()"],
    answer: 0,
  },
  {
    question: "Which statement handles errors?",
    options: ["try...catch", "error()", "throw()", "if...else"],
    answer: 0,
  },
  {
    question: "Which HTML tag is used to embed a video?",
    options: ["<media>", "<movie>", "<video>", "<embed>"],
    answer: 2,
  },
  {
    question:
      "Which attribute is used to provide an alternate text for an image?",
    options: ["title", "alt", "src", "href"],
    answer: 1,
  },
  {
    question:
      "Which CSS property controls the space between elements’ borders?",
    options: ["margin", "padding", "gap", "border-spacing"],
    answer: 0,
  },
  {
    question: "What does the <meta charset='UTF-8'> tag do?",
    options: [
      "Sets page language",
      "Defines document title",
      "Specifies character encoding",
      "Links external CSS",
    ],
    answer: 2,
  },
  {
    question: "Which CSS property is used to make text uppercase?",
    options: [
      "font-style",
      "text-transform",
      "text-decoration",
      "letter-spacing",
    ],
    answer: 1,
  },
  {
    question: "Which HTML element is used for navigation links?",
    options: ["<menu>", "<nav>", "<section>", "<aside>"],
    answer: 1,
  },
  {
    question: "Which CSS unit is relative to the root font size?",
    options: ["em", "px", "rem", "%"],
    answer: 2,
  },
  {
    question: "What does the CSS z-index property control?",
    options: [
      "Text size",
      "Stacking order",
      "Element opacity",
      "Position type",
    ],
    answer: 1,
  },
  {
    question: "Which HTML tag is used to group form elements?",
    options: ["<group>", "<fieldset>", "<section>", "<form-group>"],
    answer: 1,
  },
  {
    question: "Which CSS display value places elements in a row by default?",
    options: ["block", "inline", "flex", "grid"],
    answer: 2,
  },
  {
    question: "What does the CSS overflow property do?",
    options: [
      "Controls scrolling behavior",
      "Defines element visibility",
      "Sets element width",
      "Aligns text",
    ],
    answer: 0,
  },
  {
    question: "Which HTML element is used to define important text?",
    options: ["<b>", "<strong>", "<i>", "<mark>"],
    answer: 1,
  },
  {
    question: "Which CSS property adds shadow to elements?",
    options: ["text-shadow", "filter", "box-shadow", "drop-shadow"],
    answer: 2,
  },
  {
    question: "Which HTML attribute opens a link in a new tab?",
    options: ["new", "blank", "target='_blank'", "rel='new'"],
    answer: 2,
  },
  {
    question: "Which CSS property controls how an image fits its container?",
    options: ["background-size", "object-fit", "image-fit", "cover"],
    answer: 1,
  },
];

let currentIndex = 0;
let timer = 15;
let interval;
let score = 0;
let answered = false;
let autoNextTimeout;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("timer");
const progressEl = document.getElementById("progress");
const nextBtn = document.getElementById("nextBtn");
const endBtn = document.getElementById("endBtn");

function loadQuestion() {
  clearInterval(interval);
  clearTimeout(autoNextTimeout);

  timer = 15;
  answered = false;

  nextBtn.style.display = "none"; // 👈 hide initially

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
      autoNextAfterTimeout();
    }
  }, 1000);
}

function autoNextAfterTimeout() {
  autoNextTimeout = setTimeout(() => {
    goNext();
  }, 1200); // 1.2s reveal time
}

function selectOption(element, index) {
  if (answered) return;
  answered = true;
  clearInterval(interval);
  clearTimeout(autoNextTimeout);

  revealCorrectAnswer(index);
}

function revealCorrectAnswer(selectedIndex = null) {
  answered = true;

  nextBtn.style.display = "block"; // 👈 show now

  const correct = questions[currentIndex].answer;
  const options = document.querySelectorAll(".option");

  options.forEach((opt, i) => {
    opt.style.pointerEvents = "none";

    if (i === correct) opt.classList.add("correct");

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

function goNext() {
  currentIndex++;

  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    localStorage.setItem("quizScore", score);
    window.location.href = "result.html";
  }
}

nextBtn.onclick = () => {
  if (!answered) return;
  goNext();
};

endBtn.onclick = () => {
  localStorage.setItem("quizScore", score);
  window.location.href = "result.html";
};

loadQuestion();
