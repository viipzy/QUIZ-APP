const user = localStorage.getItem("quizUser") || "Player";
document.getElementById("userName").textContent = `Well done `;


const score = Number(localStorage.getItem("quizScore")) || 0;
const total = 50;

const percent = Math.round((score / total) * 100);

document.getElementById("finalScore").textContent = score;
document.getElementById("percentage").textContent = percent + "%";

const message = document.getElementById("message");

if (percent >= 80) {
  message.textContent = `Excellent work ${user}! Frontend champion `;
} else if (percent >= 50) {
  message.textContent = `Nice job ${user}! You're improving `;
} else {
  message.textContent = `Keep practicing ${user} — you’ll get there `;
}


function restartQuiz() {
  localStorage.removeItem("quizScore");
  window.location.href = "quiz.html";
}


const emojis = ["🎉", "🎊"];

function createEmoji() {
  const emoji = document.createElement("div");
  emoji.classList.add("emoji");

  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  emoji.style.left = Math.random() * window.innerWidth + "px";
  emoji.style.animationDuration = Math.random() * 3 + 2 + "s";

  document.body.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 5000);
}

/* Start celebration rain */
setInterval(createEmoji, 250);
