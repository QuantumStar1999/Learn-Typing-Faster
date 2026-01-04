// Word dictionary with mix of regular and capitalized words
const wordDictionary = [
    // Regular words
    "the", "be", "to", "of", "and", "a", "in", "that", "have", "I", "it", "for", "not", "on", "with", "he", "as", "you", "do", "at",
    "this", "but", "his", "by", "from", "they", "we", "say", "her", "she", "or", "an", "will", "my", "one", "all", "would", "there", "their",
    "what", "so", "up", "out", "if", "about", "who", "get", "which", "go", "me", "when", "make", "can", "like", "time", "no", "just", "him",
    "know", "take", "people", "into", "year", "your", "good", "some", "could", "them", "see", "other", "than", "then", "now", "look", "only",
    "come", "its", "over", "think", "also", "back", "after", "use", "two", "how", "our", "work", "first", "well", "way", "even", "new", "want",
    "because", "any", "these", "give", "day", "most", "us", "is", "are", "was", "were", "has", "had", "been", "being",
    
    // Capitalized words
    "Apple", "Paris", "Monday", "January", "Google", "Python", "JavaScript", "Internet", "Computer", "London",
    "Christmas", "Thanksgiving", "October", "Saturday", "Microsoft", "Amazon", "Facebook", "Instagram", "Twitter",
    "America", "England", "Germany", "Japan", "China", "India", "Australia", "Canada", "Brazil", "Mexico",
    "Einstein", "Shakespeare", "Newton", "Tesla", "Edison", "Galileo", "Darwin", "Napoleon", "Washington", "Lincoln",

    // Common Nouns (200+ words)
    "time", "person", "year", "way", "day", "thing", "man", "world", "life", "hand",
    "part", "child", "eye", "woman", "place", "work", "week", "case", "point", "government",
    "company", "number", "group", "problem", "fact", "student", "system", "program",
    "question", "story", "month", "night", "home", "water", "room", "mother", "area",
    "money", "story", "fact", "month", "lot", "right", "study", "book", "eye", "job",
    "word", "business", "issue", "side", "kind", "head", "house", "service", "friend",
    "father", "power", "hour", "game", "line", "end", "member", "law", "car", "city",
    "community", "name", "president", "team", "minute", "idea", "kid", "body", "information",
    "back", "parent", "face", "others", "level", "office", "door", "health", "person",
    "art", "war", "history", "party", "result", "change", "morning", "reason", "research",
    "girl", "guy", "moment", "air", "teacher", "force", "education", "foot", "boy",
    "policy", "music", "method", "data", "food", "understanding", "theory", "rule",
    "philosophy", "term", "condition", "process", "experience", "science", "sea",
    "form", "space", "goal", "bank", "behavior", "account", "earth", "chance", "material",
    "heat", "step", "degree", "design", "source", "action", "model", "cell", "field",
    "freedom", "environment", "country", "market", "species", "technology", "energy",
    "press", "language", "attention", "series", "nature", "skill", "disease", "media",
    "role", "effort", "relationship", "development", "organization", "equipment", "analysis",
    "management", "population", "culture", "security", "driver", "manager", "context",
    "customer", "concept", "quality", "pressure", "response", "economy", "industry",
    "resource", "structure", "knowledge", "standard", "opportunity", "performance",
    "practice", "category", "society", "activity", "election", "department", "direction",

    // Verbs (150+ words)
    "be", "have", "do", "say", "get", "make", "go", "know", "take", "see",
    "come", "think", "look", "want", "give", "use", "find", "tell", "ask", "work",
    "seem", "feel", "try", "leave", "call", "need", "become", "put", "mean", "keep",
    "let", "begin", "seem", "help", "talk", "turn", "start", "show", "hear", "play",
    "run", "move", "like", "live", "believe", "hold", "bring", "happen", "write", "provide",
    "sit", "stand", "lose", "pay", "meet", "include", "continue", "set", "learn", "change",
    "lead", "understand", "watch", "follow", "stop", "create", "speak", "read", "allow",
    "add", "spend", "grow", "open", "walk", "win", "offer", "remember", "love", "consider",
    "appear", "buy", "wait", "serve", "die", "send", "expect", "build", "stay", "fall",
    "cut", "reach", "kill", "remain", "suggest", "raise", "pass", "sell", "require",
    "report", "decide", "pull", "break", "develop", "receive", "return", "compare",
    "support", "explain", "realize", "draw", "agree", "arrive", "claim", "choose",
    "fail", "prepare", "affect", "catch", "cover", "apply", "solve", "study", "complete",
    "improve", "notice", "enjoy", "identify", "manage", "accept", "express", "promise",
    "assume", "mention", "introduce", "state", "handle", "concern", "establish", "engage",
    "obtain", "indicate", "predict", "reduce", "train", "wish", "charge", "perform",
    "tend", "discover", "operate", "determine", "maintain", "achieve", "refer", "relate",
    "contain", "attend", "avoid", "imagine", "finish", "pretend", "encourage", "connect",

    // Adjectives (100+ words)
    "good", "new", "first", "last", "long", "great", "little", "own", "other", "old",
    "right", "big", "high", "different", "small", "large", "next", "early", "young",
    "important", "few", "public", "bad", "same", "able", "best", "better", "certain",
    "clear", "whole", "major", "military", "necessary", "real", "short", "single",
    "special", "strong", "white", "whole", "free", "second", "enough", "low", "national",
    "possible", "private", "simple", "specific", "current", "human", "local", "personal",
    "general", "hard", "international", "legal", "particular", "recent", "social",
    "alone", "aware", "common", "effective", "entire", "final", "happy", "natural",
    "positive", "potential", "primary", "significant", "similar", "successful", "traditional",
    "actual", "appropriate", "central", "civil", "competitive", "complete", "cultural",
    "direct", "electronic", "financial", "historical", "immediate", "interesting",
    "political", "poor", "popular", "responsible", "serious", "top", "total", "traditional",
    "unique", "visual", "wide", "wrong", "alternative", "basic", "complex", "content",
    "corporate", "critical", "existing", "expensive", "famous", "future", "initial",
    "normal", "obvious", "previous", "professional", "regional", "safe", "senior",
    "standard", "substantial", "suitable", "upper", "usual", "valuable", "various",
    "visible", "willing",


];

// DOM Elements
const timerElement = document.getElementById('timer');
const timerButtons = document.querySelectorAll('.timer-btn');
const backspaceToggle = document.getElementById('backspaceToggle');
const backspaceStatus = document.getElementById('backspaceStatus');
const currentWordElement = document.getElementById('currentWord');
const wordInput = document.getElementById('wordInput');
const typedTextElement = document.getElementById('typedText');
const resultsElement = document.getElementById('results');
const restartBtn = document.getElementById('restartBtn');

// Result elements
const totalCharsElement = document.getElementById('totalChars');
const correctCharsElement = document.getElementById('correctChars');
const incorrectCharsElement = document.getElementById('incorrectChars');
const correctWordsElement = document.getElementById('correctWords');
const wpmElement = document.getElementById('wpm');

// Game state
let gameState = {
    timeLeft: 5 * 60, // 5 minutes in seconds
    timerActive: false,
    timerInterval: null,
    selectedTime: 5, // minutes
    backspaceEnabled: true,
    currentWordIndex: 0,
    typedWords: [],
    correctWords: 0,
    totalChars: 0,
    correctChars: 0,
    incorrectChars: 0,
    startTime: null,
    words: [],
    isGameOver: false
};

// Initialize the game
function initGame() {
    // Reset game state
    gameState.timeLeft = gameState.selectedTime * 60;
    gameState.timerActive = false;
    gameState.currentWordIndex = 0;
    gameState.typedWords = [];
    gameState.correctWords = 0;
    gameState.totalChars = 0;
    gameState.correctChars = 0;
    gameState.incorrectChars = 0;
    gameState.startTime = null;
    gameState.isGameOver = false;
    // Load saved settings from localStorage
    loadSettingsFromStorage();
    // Clear any existing timer
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
        gameState.timerInterval = null;
    }
    
    // Reset UI
    updateTimerDisplay();
    wordInput.value = '';
    wordInput.disabled = false;
    wordInput.focus();
    typedTextElement.innerHTML = '';
    resultsElement.style.display = 'none';
    
    // Generate random words for this session
    generateWords();
    
    // Display the first word
    displayCurrentWord();
    
    // Remove timer-ended animation if present
    timerElement.classList.remove('timer-ended');
}

// Generate random words from dictionary
function generateWords() {
    gameState.words = [];
    // Generate enough words for the entire test (approx 1 word per 5 seconds)
    const wordCount = gameState.selectedTime * 12;
    
    for (let i = 0; i < wordCount; i++) {
        const randomIndex = Math.floor(Math.random() * wordDictionary.length);
        gameState.words.push(wordDictionary[randomIndex]);
    }
}

// Display current word
function displayCurrentWord() {
    if (gameState.currentWordIndex < gameState.words.length) {
        currentWordElement.textContent = gameState.words[gameState.currentWordIndex];
    } else {
        // If we run out of words, generate more
        generateWords();
        gameState.currentWordIndex = 0;
        currentWordElement.textContent = gameState.words[gameState.currentWordIndex];
    }
}

// Update timer display
function updateTimerDisplay() {
    const minutes = Math.floor(gameState.timeLeft / 60);
    const seconds = gameState.timeLeft % 60;
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Start the timer
function startTimer() {
    if (gameState.timerActive) return;
    
    gameState.timerActive = true;
    gameState.startTime = new Date();
    
    gameState.timerInterval = setInterval(() => {
        gameState.timeLeft--;
        updateTimerDisplay();
        
        if (gameState.timeLeft <= 0) {
            endGame();
        }
        
        // Add animation when time is running low
        if (gameState.timeLeft <= 30) {
            timerElement.classList.add('timer-ended');
        }
    }, 1000);
}

// End the game and show results
function endGame() {
    clearInterval(gameState.timerInterval);
    gameState.timerActive = false;
    gameState.isGameOver = true;
    wordInput.disabled = true;
    
    // Calculate WPM (5 correct characters = 1 word)
    const wpm = Math.floor(gameState.correctChars / 5 / (gameState.selectedTime));
    
    // Update result elements
    totalCharsElement.textContent = gameState.totalChars;
    correctCharsElement.textContent = gameState.correctChars;
    incorrectCharsElement.textContent = gameState.incorrectChars;
    correctWordsElement.textContent = gameState.correctWords;
    wpmElement.textContent = wpm;
    
    // Show results
    resultsElement.style.display = 'grid';

    // Display the WPM history chart
    displayWpmHistory(wpm);
    
    // Scroll to results
    resultsElement.scrollIntoView({ behavior: 'smooth' });
}

// Handle word input
function handleWordInput(e) {
    // Start timer on first keystroke
    if (!gameState.timerActive && !gameState.isGameOver) {
        startTimer();
        SoundManager.playSound('start');
    }
    // Play keypress sound for regular keys
    if (e.key.length === 1 && e.key !== ' ') {
        SoundManager.playSound('keypress');
    }
    // Prevent backspace if disabled
    if (e.key === 'Backspace' && !gameState.backspaceEnabled) {
        e.preventDefault();
        return;
    }
    
    // Handle space key to move to next word
    if (e.key === ' ' && wordInput.value.trim() !== '') {
        e.preventDefault();
        
        const typedWord = wordInput.value.trim();
        const currentWord = gameState.words[gameState.currentWordIndex];
        // Play space sound
        SoundManager.playSound('space');
        // Update character counts
        gameState.totalChars += typedWord.length;
        
        // Check if the word is correct
        const isCorrect = typedWord === currentWord;
        
        // Update word counts
        if (isCorrect) {
            SoundManager.playSound('correct');
            gameState.correctWords++;
            gameState.correctChars += typedWord.length;
        } else {
            SoundManager.playSound('error');
            // Calculate incorrect characters
            const minLength = Math.min(typedWord.length, currentWord.length);
            let incorrectCount = Math.abs(typedWord.length - currentWord.length);
            
            for (let i = 0; i < minLength; i++) {
                if (typedWord[i] !== currentWord[i]) {
                    incorrectCount++;
                } else {
                    gameState.correctChars++;
                }
            }
            
            gameState.incorrectChars += incorrectCount;
        }
        
        // Store the typed word with its correctness
        gameState.typedWords.push({
            word: typedWord,
            correct: isCorrect,
            original: currentWord
        });
        
        // Update the typed text display
        updateTypedText();
        
        // Move to next word
        gameState.currentWordIndex++;
        wordInput.value = '';
        
        // Display the next word
        displayCurrentWord();
    }
}

// Update the typed text display
function updateTypedText() {
    let html = '';
    
    gameState.typedWords.forEach((wordObj, index) => {
        const wordClass = wordObj.correct ? 'correct' : 'incorrect';
        html += `<span class="${wordClass}">${wordObj.word}</span> `;
    });
    
    // Add cursor for current word if game is not over
    if (!gameState.isGameOver) {
        html += `<span class="current">${wordInput.value}</span>`;
    }
    
    typedTextElement.innerHTML = html;
    
    // Scroll to bottom of typing area
    typedTextElement.scrollTop = typedTextElement.scrollHeight;
}

// Event Listeners
timerButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        timerButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Update selected time
        gameState.selectedTime = parseInt(button.dataset.time);
        
        // Reset timer display
        gameState.timeLeft = gameState.selectedTime * 60;
        updateTimerDisplay();
        
        // Reset game if timer is changed during game
        if (!gameState.timerActive) {
            initGame();
        }
        // Save the new setting
        saveSettingsToStorage();
    });
});

backspaceToggle.addEventListener('change', () => {
    gameState.backspaceEnabled = backspaceToggle.checked;
    backspaceStatus.textContent = gameState.backspaceEnabled ? 'ON' : 'OFF';
    backspaceStatus.style.color = gameState.backspaceEnabled ? '#10b981' : '#ef4444';
    // Save the new setting
    saveSettingsToStorage();
});

wordInput.addEventListener('keydown', handleWordInput);
wordInput.addEventListener('input', updateTypedText);

restartBtn.addEventListener('click', initGame);

// Initialize the game when page loads
window.addEventListener('load', initGame);

// Add some visual effects
wordInput.addEventListener('focus', () => {
    wordInput.style.transform = 'scale(1.02)';
});

wordInput.addEventListener('blur', () => {
    wordInput.style.transform = 'scale(1)';
});

// === NEW FUNCTIONS FOR LOCALSTORAGE ===
// Save current settings (timer duration, backspace toggle) to localStorage[citation:1]
function saveSettingsToStorage() {
    const settings = {
        selectedTime: gameState.selectedTime,
        backspaceEnabled: gameState.backspaceEnabled
    };
    localStorage.setItem('typingTestSettings', JSON.stringify(settings));
}

// Load saved settings from localStorage and apply them[citation:1]
function loadSettingsFromStorage() {
    const savedSettings = localStorage.getItem('typingTestSettings');
    if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        // Apply timer setting
        gameState.selectedTime = settings.selectedTime;
        gameState.timeLeft = settings.selectedTime * 60;
        // Update the active timer button UI
        timerButtons.forEach(btn => {
            btn.classList.remove('active');
            if (parseInt(btn.dataset.time) === settings.selectedTime) {
                btn.classList.add('active');
            }
        });
        updateTimerDisplay();
        // Apply backspace setting
        gameState.backspaceEnabled = settings.backspaceEnabled;
        backspaceToggle.checked = settings.backspaceEnabled;
        backspaceStatus.textContent = settings.backspaceEnabled ? 'ON' : 'OFF';
        backspaceStatus.style.color = settings.backspaceEnabled ? '#10b981' : '#ef4444';
    }
}
/*
// Save a new WPM result to the history in localStorage
function saveWpmToHistory(currentWpm) {
    let history = JSON.parse(localStorage.getItem('typingTestHistory')) || [];
    // Add the new result with a timestamp
    history.push({
        wpm: currentWpm,
        date: new Date().toISOString().split('T')[0] // Store as YYYY-MM-DD
    });
    // Keep only the last 50 results to prevent storage from growing too large
    if (history.length > 50) {
        history = history.slice(-50);
    }
    localStorage.setItem('typingTestHistory', JSON.stringify(history));
    return history; // Return the updated history
}

// Load and display the WPM history on the results screen
function displayWpmHistory(currentWpm) {
    const history = saveWpmToHistory(currentWpm);
    // Create a simple text display of recent scores
    const historyContainer = document.createElement('div');
    historyContainer.className = 'history-container';
    historyContainer.style.marginTop = '20px';
    historyContainer.style.padding = '15px';
    historyContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    historyContainer.style.borderRadius = '10px';
    historyContainer.style.textAlign = 'center';
    historyContainer.innerHTML = `<h3><i class="fas fa-chart-line"></i> Your Recent WPM</h3>`;
    // Show last 10 results
    const recentHistory = history.slice(-10).reverse();
    let historyHTML = '<p>';
    recentHistory.forEach((record, index) => {
        // Highlight the result that was just achieved
        const isCurrent = (index === 0 && record.wpm === currentWpm);
        historyHTML += `<span style="${isCurrent ? 'font-weight:bold; color:#4f46e5;' : ''} margin: 0 8px;">${record.wpm}</span>`;
    });
    historyHTML += '</p>';
    // Add a note about improvement if there's more than one result
    if (history.length > 1) {
        const firstWpm = history[0].wpm;
        const latestWpm = history[history.length - 1].wpm;
        const improvement = latestWpm - firstWpm;
        const trendText = improvement > 0 ? `<span style="color:#10b981;">(+${improvement})</span>` : `<span style="color:#ef4444;">(${improvement})</span>`;
        historyHTML += `<p>Overall change from first to last test: ${firstWpm} → ${latestWpm} WPM ${trendText}</p>`;
    }
    historyContainer.innerHTML += historyHTML;
    // Insert the history display after the results grid
    resultsElement.parentNode.insertBefore(historyContainer, resultsElement.nextSibling);
}
*/

// === UPDATED FUNCTIONS FOR WPM GRAPH ===

// Global chart instance
let wpmChart = null;

// Save a new WPM result to the history in localStorage
function saveWpmToHistory(currentWpm) {
    let history = JSON.parse(localStorage.getItem('typingTestHistory')) || [];
    
    // Add the new result with a timestamp
    history.push({
        wpm: currentWpm,
        date: new Date().toISOString(),
        timestamp: Date.now(),
        dateDisplay: new Date().toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    });
    
    // Keep only the last 100 results to prevent storage from growing too large
    if (history.length > 100) {
        history = history.slice(-100);
    }
    
    localStorage.setItem('typingTestHistory', JSON.stringify(history));
    return history;
}

// Get WPM history statistics
function getWpmStatistics(history) {
    if (!history || history.length === 0) {
        return {
            best: 0,
            average: 0,
            latest: 0,
            total: 0,
            trend: 0
        };
    }
    
    const latest = history[history.length - 1].wpm;
    const best = Math.max(...history.map(item => item.wpm));
    const average = Math.round(history.reduce((sum, item) => sum + item.wpm, 0) / history.length);
    
    // Calculate trend (average of last 5 vs previous 5)
    let trend = 0;
    if (history.length >= 10) {
        const recent = history.slice(-5).reduce((sum, item) => sum + item.wpm, 0) / 5;
        const previous = history.slice(-10, -5).reduce((sum, item) => sum + item.wpm, 0) / 5;
        trend = Math.round((recent - previous) * 10) / 10;
    }
    
    return {
        best,
        average,
        latest,
        total: history.length,
        trend
    };
}

// Create or update the WPM chart
function createWpmChart(history) {
    const ctx = document.getElementById('wpmChart').getContext('2d');
    
    // Destroy existing chart if it exists
    if (wpmChart) {
        wpmChart.destroy();
    }
    

    // Prepare data
    const labels = history.map((item, index) => {
        // Show date for first, last, and every 5th test, otherwise just test number
        if (index === 0 || index === history.length - 1 || (index + 1) % 5 === 0) {
            return item.dateDisplay;
        }
        return `Test ${index + 1}`;
    });
    
    const wpmData = history.map(item => item.wpm);
    
    // Calculate moving average (5-test window)
    const movingAvg = [];
    for (let i = 0; i < wpmData.length; i++) {
        const start = Math.max(0, i - 2);
        const end = Math.min(wpmData.length, i + 3);
        const slice = wpmData.slice(start, end);
        const avg = slice.reduce((a, b) => a + b, 0) / slice.length;
        movingAvg.push(Math.round(avg * 10) / 10);
    }

    // Calculate min and max from all data
    const allData = [...wpmData, ...movingAvg];
    const dataMin = Math.min(...allData);
    const dataMax = Math.max(...allData);

    // Calculate y-axis range with 2-unit buffer below and 5-unit buffer above
    const yMin = Math.max(0, dataMin - 2);
    const yMax = dataMax + 5;

    // Create gradient for the chart
    const gradient = ctx.createLinearGradient(0, 0, 0, 250);
    gradient.addColorStop(0, 'rgba(79, 70, 229, 0.3)');
    gradient.addColorStop(1, 'rgba(79, 70, 229, 0.05)');
    
    // Chart configuration
    const chartConfig = {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'WPM Score',
                    data: wpmData,
                    borderColor: '#4f46e5',
                    backgroundColor: gradient,
                    borderWidth: 3,
                    pointBackgroundColor: '#4f46e5',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 8,
                    fill: true,
                    tension: 0.2
                },
                {
                    label: '5-Test Average',
                    data: movingAvg,
                    borderColor: '#10b981',
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    pointRadius: 0,
                    tension: 0.2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: '#1f2937',
                        font: {
                            size: 12,
                            family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                        },
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(31, 41, 55, 0.9)',
                    titleColor: '#f8fafc',
                    bodyColor: '#f8fafc',
                    borderColor: '#4f46e5',
                    borderWidth: 1,
                    cornerRadius: 8,
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        title: function(tooltipItems) {
                            const index = tooltipItems[0].dataIndex;
                            return `Test ${index + 1} - ${history[index].dateDisplay}`;
                        },
                        label: function(context) {
                            const wpm = context.raw;
                            const index = context.dataIndex;
                            const accuracy = history[index].accuracy || 'N/A';
                            return `WPM: ${wpm}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        color: '#666',
                        maxRotation: 45,
                        minRotation: 45,
                        font: {
                            size: 11
                        }
                    }
                },
                y: {
                    min: yMin,
                    max: yMax,
                    // beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        color: '#666',
                        font: {
                            size: 12
                        }
                    },
                    title: {
                        display: true,
                        text: 'Words Per Minute',
                        color: '#666',
                        font: {
                            size: 12,
                            weight: 'bold'
                        }
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            },
            animations: {
                tension: {
                    duration: 1000,
                    easing: 'linear'
                }
            }
        }
    };
    
    // Create the chart
    wpmChart = new Chart(ctx, chartConfig);
}

// Display WPM history with graph
function displayWpmHistory(currentWpm) {
    let history = JSON.parse(localStorage.getItem('typingTestHistory')) || [];
    
    // Add current WPM to history
    history = saveWpmToHistory(currentWpm);
    
    // Calculate statistics
    const stats = getWpmStatistics(history);
    
    // Update stats display
    document.getElementById('bestWpm').textContent = stats.best;
    document.getElementById('avgWpm').textContent = stats.average;
    document.getElementById('latestWpm').textContent = stats.latest;
    document.getElementById('totalTests').textContent = stats.total;
    
    // Create the chart
    createWpmChart(history);
    
    // Add trend indicator
    if (stats.trend !== 0) {
        const trendElement = document.createElement('div');
        trendElement.className = 'graph-stat';
        trendElement.innerHTML = `
            <span class="graph-stat-label">Trend:</span>
            <span class="graph-stat-value" style="color: ${stats.trend > 0 ? '#10b981' : '#ef4444'}">
                ${stats.trend > 0 ? '+' : ''}${stats.trend}
            </span>
        `;
        document.querySelector('.graph-stats').appendChild(trendElement);
    }
    
    // Add clear history button if we have history
    if (history.length > 0) {
        const clearButton = document.createElement('button');
        clearButton.className = 'clear-history-btn';
        if(!document.getElementsByClassName("fas fa-trash-alt"))
            clearButton.innerHTML = '<i class="fas fa-trash-alt"></i> Clear History';
        clearButton.onclick = clearWpmHistory;
        
        // Insert after graph stats
        const graphStats = document.querySelector('.graph-stats');
        graphStats.parentNode.insertBefore(clearButton, graphStats.nextSibling);
    }
}

// Clear WPM history
function clearWpmHistory() {
    if (confirm('Are you sure you want to clear all your WPM history? This cannot be undone.')) {
        localStorage.removeItem('typingTestHistory');
        
        // Destroy chart
        if (wpmChart) {
            wpmChart.destroy();
            wpmChart = null;
        }
        
        // Update stats display
        document.getElementById('bestWpm').textContent = '0';
        document.getElementById('avgWpm').textContent = '0';
        document.getElementById('latestWpm').textContent = '0';
        document.getElementById('totalTests').textContent = '0';
        
        // Remove clear button
        const clearButton = document.querySelector('.clear-history-btn');
        if (clearButton) {
            clearButton.remove();
        }
        
        // Show message
        const message = document.createElement('div');
        message.style.textAlign = 'center';
        message.style.padding = '20px';
        message.style.color = '#666';
        message.innerHTML = '<i class="fas fa-info-circle"></i> Your WPM history has been cleared. Start a new test to build your progress chart!';
        
        const chartContainer = document.querySelector('.chart-container');
        chartContainer.innerHTML = '';
        chartContainer.appendChild(message);
    }
}

// MODIFIED endGame() function - Update to use new display function
function endGame() {
    clearInterval(gameState.timerInterval);
    gameState.timerActive = false;
    gameState.isGameOver = true;
    wordInput.disabled = true;
    
    // Calculate WPM (5 correct characters = 1 word)
    const wpm = Math.floor(gameState.correctChars / 5 / (gameState.selectedTime));
    
    // Update result elements
    totalCharsElement.textContent = gameState.totalChars;
    correctCharsElement.textContent = gameState.correctChars;
    incorrectCharsElement.textContent = gameState.incorrectChars;
    correctWordsElement.textContent = gameState.correctWords;
    wpmElement.textContent = wpm;
    
    // Show results
    resultsElement.style.display = 'grid';
    
    // Display the WPM history graph
    displayWpmHistory(wpm);

    // Play completion sound
    SoundManager.playSound('complete');

    // Scroll to results
    resultsElement.scrollIntoView({ behavior: 'smooth' });
}

// MODIFIED initGame() function - Add history check
function initGame() {
    // Reset game state
    gameState.timeLeft = gameState.selectedTime * 60;
    gameState.timerActive = false;
    gameState.currentWordIndex = 0;
    gameState.typedWords = [];
    gameState.correctWords = 0;
    gameState.totalChars = 0;
    gameState.correctChars = 0;
    gameState.incorrectChars = 0;
    gameState.startTime = null;
    gameState.isGameOver = false;
    
    // Clear any existing timer
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
        gameState.timerInterval = null;
    }
    
    // Reset UI
    updateTimerDisplay();
    wordInput.value = '';
    wordInput.disabled = false;
    wordInput.focus();
    typedTextElement.innerHTML = '';
    resultsElement.style.display = 'none';
    
    // Generate random words for this session
    generateWords();
    
    // Display the first word
    displayCurrentWord();
    
    // Remove timer-ended animation if present
    timerElement.classList.remove('timer-ended');
    
    // Load saved settings from localStorage
    loadSettingsFromStorage();
    
    // Initialize chart if there's history
    const history = JSON.parse(localStorage.getItem('typingTestHistory')) || [];
    if (history.length > 0 && !document.querySelector('.chart-container canvas')) {
        // We're not in results view, so don't create chart yet
        // Chart will be created when results are shown
    }
    if (SoundManager.audioContext && SoundManager.audioContext.state === 'suspended') {
        SoundManager.audioContext.resume();
    }
}

// Initialize the chart on page load if we have history
window.addEventListener('load', function() {
    initGame();
    
    // Check if we should show initial chart (if coming back to page with results visible)
    const history = JSON.parse(localStorage.getItem('typingTestHistory')) || [];
    if (history.length > 0 && resultsElement.style.display !== 'none') {
        const stats = getWpmStatistics(history);
        document.getElementById('bestWpm').textContent = stats.best;
        document.getElementById('avgWpm').textContent = stats.average;
        document.getElementById('latestWpm').textContent = stats.latest;
        document.getElementById('totalTests').textContent = stats.total;
        createWpmChart(history);
    }
});









// === SOUND MANAGER ===

const SoundManager = {
    // Audio context
    audioContext: null,
    
    // Sound settings
    settings: {
        enabled: true,
        volume: 0.7, // 0 to 1
        speed: 1.0, // Playback rate
        soundType: 'beep' // 'beep', 'click', or 'keyboard'
    },
    
    // Initialize sound system
    init() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.loadSettingsFromStorage();
            this.updateUI();
        } catch (error) {
            console.warn('Web Audio API not supported, sound disabled');
            this.settings.enabled = false;
        }
    },
    
    // Load settings from localStorage
    loadSettingsFromStorage() {
        const savedSettings = localStorage.getItem('typingTestSoundSettings');
        if (savedSettings) {
            this.settings = { ...this.settings, ...JSON.parse(savedSettings) };
        }
    },
    
    // Save settings to localStorage
    saveSettingsToStorage() {
        localStorage.setItem('typingTestSoundSettings', JSON.stringify(this.settings));
    },
    
    // Update UI elements with current settings
    updateUI() {
        const soundToggle = document.getElementById('soundToggle');
        const volumeSlider = document.getElementById('volumeSlider');
        const speedSlider = document.getElementById('speedSlider');
        const volumeValue = document.getElementById('volumeValue');
        const speedValue = document.getElementById('speedValue');
        
        if (!soundToggle) return;
        
        // Update toggle button
        if (this.settings.enabled) {
            soundToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
            soundToggle.classList.remove('muted');
        } else {
            soundToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
            soundToggle.classList.add('muted');
        }
        
        // Update sliders and values
        if (volumeSlider && volumeValue) {
            const volumePercent = Math.round(this.settings.volume * 100);
            volumeSlider.value = volumePercent;
            volumeValue.textContent = `${volumePercent}%`;
        }
        
        if (speedSlider && speedValue) {
            const speedPercent = Math.round(this.settings.speed * 100);
            speedSlider.value = speedPercent;
            speedValue.textContent = `${this.settings.speed.toFixed(1)}x`;
        }
        
        // Update preset buttons
        const presetButtons = document.querySelectorAll('.sound-preset-btn');
        presetButtons.forEach(btn => {
            btn.classList.remove('active');
            
            const preset = btn.dataset.preset;
            if (preset === 'quiet' && this.settings.volume < 0.4) {
                btn.classList.add('active');
            } else if (preset === 'normal' && this.settings.volume >= 0.4 && this.settings.volume <= 0.7 && this.settings.speed === 1.0) {
                btn.classList.add('active');
            } else if (preset === 'fast' && this.settings.speed > 1.0) {
                btn.classList.add('active');
            }
        });
    },
    
    // Play a sound based on type
    playSound(type = 'keypress') {
        if (!this.settings.enabled || !this.audioContext) return;
        
        // Resume audio context if suspended (required by some browsers)
        if (this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }
        
        let frequency, duration, waveform;
        
        // Configure sound based on type
        switch(type) {
            case 'keypress':
                frequency = 800 + Math.random() * 100;
                duration = 0.05 * (1 / this.settings.speed);
                waveform = 'sine';
                break;
                
            case 'error':
                frequency = 400;
                duration = 0.1 * (1 / this.settings.speed);
                waveform = 'sawtooth';
                break;
                
            case 'space':
                frequency = 600;
                duration = 0.08 * (1 / this.settings.speed);
                waveform = 'square';
                break;
                
            case 'correct':
                frequency = 1000;
                duration = 0.06 * (1 / this.settings.speed);
                waveform = 'sine';
                break;
                
            case 'start':
                frequency = 1200;
                duration = 0.2 * (1 / this.settings.speed);
                waveform = 'sine';
                break;
                
            case 'complete':
                // Play a little success melody
                this.playMelody([1200, 1400, 1600], [0.1, 0.1, 0.2]);
                return;
                
            default:
                frequency = 800;
                duration = 0.05 * (1 / this.settings.speed);
                waveform = 'sine';
        }
        
        this.generateTone(frequency, duration, waveform);
    },
    
    // Generate a single tone
    generateTone(frequency, duration, waveform = 'sine') {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.value = frequency;
        oscillator.type = waveform;
        
        // Apply volume with fade in/out
        const now = this.audioContext.currentTime;
        gainNode.gain.setValueAtTime(0.001, now);
        gainNode.gain.exponentialRampToValueAtTime(this.settings.volume, now + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration);
        
        oscillator.start(now);
        oscillator.stop(now + duration);
        
        // Clean up
        oscillator.onended = () => {
            oscillator.disconnect();
            gainNode.disconnect();
        };
    },
    
    // Play a sequence of tones (for melodies)
    playMelody(frequencies, durations) {
        let currentTime = this.audioContext.currentTime;
        
        frequencies.forEach((freq, index) => {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.frequency.value = freq;
            oscillator.type = 'sine';
            
            // Apply volume envelope
            const duration = durations[index] * (1 / this.settings.speed);
            gainNode.gain.setValueAtTime(0.001, currentTime);
            gainNode.gain.exponentialRampToValueAtTime(this.settings.volume, currentTime + 0.01);
            gainNode.gain.exponentialRampToValueAtTime(0.001, currentTime + duration);
            
            oscillator.start(currentTime);
            oscillator.stop(currentTime + duration);
            
            currentTime += duration;
        });
    },
    
    // Test sound
    playTestSound() {
        if (!this.settings.enabled) return;
        
        // Play a test sequence
        const testSequence = [
            { type: 'keypress', delay: 0 },
            { type: 'keypress', delay: 100 },
            { type: 'keypress', delay: 200 },
            { type: 'space', delay: 300 },
            { type: 'correct', delay: 400 },
            { type: 'error', delay: 500 }
        ];
        
        testSequence.forEach(sound => {
            setTimeout(() => {
                this.playSound(sound.type);
            }, sound.delay * (1 / this.settings.speed));
        });
    },
    
    // Toggle sound on/off
    toggleSound() {
        this.settings.enabled = !this.settings.enabled;
        this.saveSettingsToStorage();
        this.updateUI();
        
        // Play a confirmation sound if turning on
        if (this.settings.enabled) {
            this.playSound('start');
        }
    },
    
    // Set volume (0-1)
    setVolume(value) {
        this.settings.volume = value / 100;
        this.saveSettingsToStorage();
        this.updateUI();
    },
    
    // Set playback speed
    setSpeed(value) {
        this.settings.speed = value / 100;
        this.saveSettingsToStorage();
        this.updateUI();
    },
    
    // Apply preset
    applyPreset(preset) {
        switch(preset) {
            case 'quiet':
                this.settings.volume = 0.3;
                this.settings.speed = 1.0;
                break;
            case 'normal':
                this.settings.volume = 0.7;
                this.settings.speed = 1.0;
                break;
            case 'fast':
                this.settings.volume = 0.7;
                this.settings.speed = 1.5;
                break;
        }
        
        this.saveSettingsToStorage();
        this.updateUI();
        this.playTestSound();
    }
};


// === NEW EVENT LISTENERS FOR SOUND CONTROLS ===

// Initialize sound manager when page loads
window.addEventListener('load', function() {
    SoundManager.init();
    
    // Sound toggle button
    const soundToggle = document.getElementById('soundToggle');
    const soundPanel = document.getElementById('soundPanel');
    
    soundToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        soundPanel.classList.toggle('show');
    });
    
    // Volume slider
    const volumeSlider = document.getElementById('volumeSlider');
    if (volumeSlider) {
        volumeSlider.addEventListener('input', function() {
            SoundManager.setVolume(this.value);
        });
    }
    
    // Speed slider
    const speedSlider = document.getElementById('speedSlider');
    if (speedSlider) {
        speedSlider.addEventListener('input', function() {
            SoundManager.setSpeed(this.value);
        });
    }
    
    // Preset buttons
    const presetButtons = document.querySelectorAll('.sound-preset-btn');
    presetButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            SoundManager.applyPreset(this.dataset.preset);
        });
    });
    
    // Test sound button
    const testSoundBtn = document.getElementById('testSound');
    if (testSoundBtn) {
        testSoundBtn.addEventListener('click', function() {
            SoundManager.playTestSound();
        });
    }
    
    // Close sound panel when clicking outside
    document.addEventListener('click', function(e) {
        if (!soundPanel.contains(e.target) && !soundToggle.contains(e.target)) {
            soundPanel.classList.remove('show');
        }
    });
    
    // Prevent closing when clicking inside panel
    soundPanel.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});



// Add keyboard shortcut for sound toggle (Alt+S)
document.addEventListener('keydown', function(e) {
    if (e.altKey && e.key === 's') {
        e.preventDefault();
        SoundManager.toggleSound();
    }
});