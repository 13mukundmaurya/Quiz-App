let state = {
    screen: 'welcome',
    selectedCategory: null,
    selectedDifficulty: null,
    currentQuestionIndex: 0,
    answers: [],
    timings: [],
    quizQuestions: [],
    timerInterval: null,
    timeRemaining: 30,
    totalTime: 0,
    questionStartTime: 0
};

// Screen Management
function showWelcomeScreen() {
    clearTimer();
    state = {
        screen: 'welcome',
        selectedCategory: null,
        selectedDifficulty: null,
        currentQuestionIndex: 0,
        answers: [],
        timings: [],
        quizQuestions: [],
        timerInterval: null,
        timeRemaining: 30,
        totalTime: 0,
        questionStartTime: 0
    };
    updateScreens();
}

function showSetupScreen() {
    state.screen = 'setup';
    updateScreens();
}

function startQuiz() {
    if (!state.selectedCategory || !state.selectedDifficulty) {
        alert('Please select both category and difficulty level');
        return;
    }
    state.quizQuestions = quizzes[state.selectedCategory][state.selectedDifficulty];
    state.answers = new Array(state.quizQuestions.length).fill(null);
    state.timings = new Array(state.quizQuestions.length).fill(0);
    state.currentQuestionIndex = 0;
    state.screen = 'quiz';
    state.questionStartTime = Date.now();
    updateScreens();
    displayQuestion();
    startTimer();
}

function retakeQuiz() {
    showSetupScreen();
}

function updateScreens() {
    document.getElementById('welcomeScreen').classList.remove('active');
    document.getElementById('setupScreen').classList.remove('active');
    document.getElementById('quizScreen').classList.remove('active');
    document.getElementById('resultsScreen').classList.remove('active');

    if (state.screen === 'welcome') {
        document.getElementById('welcomeScreen').classList.add('active');
    } else if (state.screen === 'setup') {
        document.getElementById('setupScreen').classList.add('active');
    } else if (state.screen === 'quiz') {
        document.getElementById('quizScreen').classList.add('active');
    } else if (state.screen === 'results') {
        document.getElementById('resultsScreen').classList.add('active');
    }
}

// Setup Screen Functions
function selectCategory(button) {
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    state.selectedCategory = button.dataset.category;
}

function selectDifficulty(button) {
    document.querySelectorAll('.difficulty-btn').forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    state.selectedDifficulty = button.dataset.difficulty;
    
    const startBtn = document.getElementById('startBtn');
    if (state.selectedCategory && state.selectedDifficulty) {
        startBtn.disabled = false;
    }
}

// Quiz Functions
function displayQuestion() {
    const question = state.quizQuestions[state.currentQuestionIndex];
    
    // Update header
    const progress = ((state.currentQuestionIndex + 1) / state.quizQuestions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('currentQuestion').textContent = state.currentQuestionIndex + 1;
    document.getElementById('totalQuestions').textContent = state.quizQuestions.length;
    document.getElementById('categoryBadge').textContent = state.selectedCategory;
    document.getElementById('difficultyBadge').textContent = state.selectedDifficulty;
    document.getElementById('difficultyBadge').className = `difficulty-badge ${state.selectedDifficulty.toLowerCase()}`;
    
    // Display question
    document.getElementById('questionText').textContent = question.question;
    
    // Display options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const label = document.createElement('label');
        label.className = 'option-item';
        if (state.answers[state.currentQuestionIndex] === index) {
            label.classList.add('selected');
        }
        label.innerHTML = `
            <input type="radio" name="option" value="${index}" ${state.answers[state.currentQuestionIndex] === index ? 'checked' : ''} onchange="selectAnswer(${index})">
            <span>${option}</span>
        `;
        optionsContainer.appendChild(label);
    });

    // Update navigation buttons
    document.getElementById('prevBtn').disabled = state.currentQuestionIndex === 0;
    
    const isLastQuestion = state.currentQuestionIndex === state.quizQuestions.length - 1;
    document.getElementById('nextBtn').style.display = isLastQuestion ? 'none' : 'block';
    document.getElementById('submitBtn').style.display = isLastQuestion ? 'block' : 'none';
    document.getElementById('nextBtn').disabled = false;

    // Reset timer
    state.timeRemaining = 30;
    state.questionStartTime = Date.now();
    updateTimer();
}

function selectAnswer(index) {
    state.answers[state.currentQuestionIndex] = index;
}

function previousQuestion() {
    if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
        displayQuestion();
    }
}

function nextQuestion() {
    if (state.currentQuestionIndex < state.quizQuestions.length - 1) {
        saveQuestionTime();
        state.currentQuestionIndex++;
        displayQuestion();
    }
}

function saveQuestionTime() {
    const timeSpent = Math.round((Date.now() - state.questionStartTime) / 1000);
    state.timings[state.currentQuestionIndex] = timeSpent;
    state.totalTime += timeSpent;
}

function startTimer() {
    if (state.timerInterval) clearInterval(state.timerInterval);
    state.timerInterval = setInterval(() => {
        state.timeRemaining--;
        updateTimer();
        if (state.timeRemaining <= 0) {
            autoSubmitQuestion();
        }
    }, 1000);
}

function updateTimer() {
    document.getElementById('timerValue').textContent = state.timeRemaining;
    
    const timerText = document.querySelector('.timer-text');
    timerText.classList.remove('warning', 'danger');
    if (state.timeRemaining <= 5) {
        timerText.classList.add('danger');
    } else if (state.timeRemaining <= 10) {
        timerText.classList.add('warning');
    }

    // Update SVG circle
    const circle = document.getElementById('timerCircle');
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (state.timeRemaining / 30) * circumference;
    circle.style.strokeDashoffset = offset;
}

function clearTimer() {
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
    }
}

function autoSubmitQuestion() {
    clearTimer();
    if (state.currentQuestionIndex < state.quizQuestions.length - 1) {
        saveQuestionTime();
        state.currentQuestionIndex++;
        displayQuestion();
        startTimer();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    clearTimer();
    saveQuestionTime();
    state.screen = 'results';
    displayResults();
    updateScreens();
}

// Results Functions
function displayResults() {
    // Calculate score
    let correctCount = 0;
    state.quizQuestions.forEach((question, index) => {
        if (state.answers[index] === question.correct) {
            correctCount++;
        }
    });
    
    const percentage = Math.round((correctCount / state.quizQuestions.length) * 100);
    const incorrectCount = state.quizQuestions.length - correctCount;
    const totalMinutes = Math.floor(state.totalTime / 60);
    const totalSeconds = state.totalTime % 60;
    
    // Update summary
    document.getElementById('scorePercentage').textContent = percentage + '%';
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('incorrectCount').textContent = incorrectCount;
    document.getElementById('totalTime').textContent = `${totalMinutes}:${totalSeconds.toString().padStart(2, '0')}`;
    
    // Display detailed results
    const detailedList = document.getElementById('detailedResultsList');
    detailedList.innerHTML = '';
    state.quizQuestions.forEach((question, index) => {
        const isCorrect = state.answers[index] === question.correct;
        const resultDiv = document.createElement('div');
        resultDiv.className = `result-item ${isCorrect ? 'correct' : 'incorrect'}`;
        resultDiv.innerHTML = `
            <div class="result-item-question">Question ${index + 1}</div>
            <div class="result-item-answer">${question.question}</div>
            <div>
                <span class="result-item-status">${isCorrect ? 'Correct ✓' : 'Incorrect ✗'}</span>
                <span style="margin-left: 12px; font-size: 13px; color: var(--text-secondary);">Time: ${state.timings[index]}s</span>
            </div>
        `;
        detailedList.appendChild(resultDiv);
    });

    // Display charts
    displayCharts(correctCount, incorrectCount, percentage);
}

function displayCharts(correctCount, incorrectCount, percentage) {
    // Performance Chart
    const performanceCtx = document.getElementById('performanceChart').getContext('2d');
    new Chart(performanceCtx, {
        type: 'doughnut',
        data: {
            labels: ['Correct', 'Incorrect'],
            datasets: [{
                data: [correctCount, incorrectCount],
                backgroundColor: ['#10b981', '#ef4444'],
                borderColor: '#ffffff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Time Chart
    const timeCtx = document.getElementById('timeChart').getContext('2d');
    const questionLabels = state.quizQuestions.map((_, i) => `Q${i + 1}`);
    new Chart(timeCtx, {
        type: 'bar',
        data: {
            labels: questionLabels,
            datasets: [{
                label: 'Time (seconds)',
                data: state.timings,
                backgroundColor: '#6366f1',
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 5
                    }
                }
            }
        }
    });
}
