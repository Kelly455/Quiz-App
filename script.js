// --- QUESTION DATA ---
const questions = [
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Osmium", "Silver"],
    correctIndex: 1
  },
  {
    question: "What is the capital city of Japan?",
    options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    correctIndex: 2
  },
  {
    question: "Which planet in our solar system is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctIndex: 1
  }
];

// --- DOM ELEMENT REFERENCES ---
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const progress = document.getElementById('progress');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const scoreText = document.getElementById('score-text');

// --- STATE VARIABLES ---
let currentQuestionIndex = 0;
let score = 0;
let selectedOptionIndex = null;

function renderQuestion() {
  // Grab current question object
  const current = questions[currentQuestionIndex];

  // Update progress (1-based display number)
  progress.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;

  // Update question text
  questionText.textContent = current.question;

  // Clear previous options and dynamically generate option buttons
  optionsContainer.innerHTML = '';
  current.options.forEach((optionText, index) => {
    const optionBtn = document.createElement('button');
    optionBtn.textContent = optionText;
    optionBtn.setAttribute('data-option-index', index);

    // Option Click Handler
    optionBtn.addEventListener('click', (e) => {
      // 1. Update State
      selectedOptionIndex = Number(e.target.dataset.optionIndex);

      // 2. Update UI: Clear previous highlights and highlight clicked option
      const allOptions = optionsContainer.querySelectorAll('button');
      allOptions.forEach(btn => btn.classList.remove('selected'));
      optionBtn.classList.add('selected');

      // 3. Enable Next Button
      nextBtn.disabled = false;
    });

    optionsContainer.appendChild(optionBtn);
  });

  // Reset selection state for fresh question
  selectedOptionIndex = null;
  nextBtn.disabled = true;
}

// Initial render call
renderQuestion();

nextBtn.addEventListener('click', () => {
  // 1. Check if the selected option matches the correct answer
  if (selectedOptionIndex === questions[currentQuestionIndex].correctIndex) {
    score++;
  }

  // 2. Advance to the next question index
  currentQuestionIndex++;

  // 3. Render next question or show final results
  if (currentQuestionIndex < questions.length) {
    renderQuestion();
  } else {
    // End of quiz: switch screens and display the final calculated score
    quizScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    scoreText.textContent = `You scored ${score} out of ${questions.length}`;
  }
});

// --- RESTART BUTTON HANDLER ---
restartBtn.addEventListener('click', () => {
  // 1. Reset state
  currentQuestionIndex = 0;
  score = 0;

  // 2. Switch screens back to the quiz view
  resultsScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');

  // 3. Render Question 1 fresh
  renderQuestion();
});