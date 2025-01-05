const quizData = [
  {
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    correct: 2,
  },
  {
    question: "Which programming language is known as the language of the web?",
    options: ["Python", "C++", "JavaScript", "Java"],
    correct: 2,
  },
  {
    question: "What is the speed of light in a vacuum?",
    options: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "500,000 km/s"],
    correct: 0,
  },
  {
    question: "Who is the author of 'The Hobbit'?",
    options: [
      "J.K. Rowling",
      "J.R.R. Tolkien",
      "George R.R. Martin",
      "C.S. Lewis",
    ],
    correct: 1,
  },
  {
    question: "What is the default value of an int variable in Java?",
    options: ["0", "null", "undefined", "NaN"],
    correct: 0,
  },
  {
    question: "Which keyword is used to create a subclass in Java?",
    options: ["extends", "implements", "inherits", "super"],
    correct: 0,
  },
  {
    question: "What does JVM stand for?",
    options: [
      "Java Virtual Machine",
      "Java Variable Method",
      "Java Verified Module",
      "Java Value Model",
    ],
    correct: 0,
  },
  {
    question: "Which method is used to start a thread in Java?",
    options: ["run()", "start()", "execute()", "begin()"],
    correct: 1,
  },
  {
    question: "Which of the following is not a Java keyword?",
    options: ["volatile", "main", "instanceof", "synchronized"],
    correct: 1,
  },
  {
    question: "What is the size of a char in Java?",
    options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
    correct: 1,
  },
  {
    question: "Which of these is a marker interface in Java?",
    options: [
      "Serializable",
      "Cloneable",
      "Both Serializable and Cloneable",
      "None of the above",
    ],
    correct: 2,
  },
  {
    question: "What is the parent class of all Java classes?",
    options: ["Object", "Class", "Super", "Base"],
    correct: 0,
  },
  {
    question:
      "Which exception is thrown when an array is accessed with an illegal index in Java?",
    options: [
      "IllegalIndexException",
      "IndexOutOfBoundsException",
      "ArrayIndexException",
      "NullPointerException",
    ],
    correct: 1,
  },
  {
    question: "Which of the following is not a feature of Java?",
    options: [
      "Object-oriented",
      "Platform-independent",
      "Use of pointers",
      "Robust",
    ],
    correct: 2,
  },
  {
    question: "Which Java keyword is used to define a constant variable?",
    options: ["static", "final", "const", "immutable"],
    correct: 1,
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");
const scoreAlertEl = document.getElementById("score-alert");

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  optionsEl.innerHTML = "";
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.classList.add("btn", "btn-option");
    button.textContent = option;
    button.onclick = () => selectAnswer(index);
    optionsEl.appendChild(button);
  });
  nextBtn.style.display = "none";
  scoreAlertEl.style.display = "none";
}

function selectAnswer(index) {
  const currentQuestion = quizData[currentQuestionIndex];
  const buttons = document.querySelectorAll(".btn-option");
  buttons.forEach((button, i) => {
    button.disabled = true;
    if (i === currentQuestion.correct) {
      button.classList.add("correct");
    } else if (i === index) {
      button.classList.add("incorrect");
    }
  });
  if (index === currentQuestion.correct) {
    score++;
  }
  nextBtn.style.display = "block";
}

function showScore() {
  questionEl.style.display = "none";
  optionsEl.style.display = "none";
  nextBtn.style.display = "none";
  scoreAlertEl.style.display = "block";
  scoreAlertEl.textContent = `🎉 Well done! Your score is ${score}/${quizData.length}.`;
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

// Initialize the quiz
loadQuestion();
