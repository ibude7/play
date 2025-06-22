// Jeopardy Game JavaScript with Professional Host Voice and Enhanced Features

// Question Generator Functions
function generateCBSQuestion() {
    const questions = [
        { q: "This hit procedural series follows a team of behavioral analysts in the FBI's BAU unit.", a: "What is Criminal Minds?" },
        { q: "This military crime drama starring Mark Harmon ran for 19 seasons before his departure.", a: "What is NCIS?" },
        { q: "The longest-running primetime scripted series in US TV history features detectives solving crimes in NYC.", a: "What is Law & Order?" },
        { q: "This drama series follows the Reagan family of New York law enforcement officers.", a: "What is Blue Bloods?" },
        { q: "This series starring Melissa Rauch as a night court judge is a revival of a classic sitcom.", a: "What is Night Court?" },
        { q: "CSI returned with this Vegas-set series starring William Petersen and Jorja Fox.", a: "What is CSI: Vegas?" },
        { q: "Chuck Lorre created this sitcom about a young genius and his family in Texas.", a: "What is Young Sheldon?" },
        { q: "This drama series follows firefighters and paramedics at Firehouse 51 in Chicago.", a: "What is Chicago Fire?" }
    ];
    return questions[Math.floor(Math.random() * questions.length)];
}

function generateShowtimeQuestion() {
    const questions = [
        { q: "This drama series follows a high school soccer team's survival after a plane crash in the wilderness.", a: "What is Yellowjackets?" },
        { q: "This series created by Lena Waithe chronicles life on Chicago's South Side.", a: "What is The Chi?" },
        { q: "This reality competition series features drag queens competing for a grand prize.", a: "What is RuPaul's Drag Race?" },
        { q: "This series starring Bryan Cranston features a judge compromising his principles to protect his son.", a: "What is Your Honor?" },
        { q: "This series follows real couples in therapy sessions with Dr. Orna Guralnik.", a: "What is Couples Therapy?" }
    ];
    return questions[Math.floor(Math.random() * questions.length)];
}

function generateParamountPlusQuestion() {
    const questions = [
        { q: "This Star Trek series follows Captain Pike, Spock, and Number One before Kirk's era.", a: "What is Strange New Worlds?" },
        { q: "This Yellowstone prequel series is set in the 1920s starring Harrison Ford.", a: "What is 1923?" },
        { q: "This animated Star Trek series follows the lower-ranking crew of the USS Cerritos.", a: "What is Lower Decks?" },
        { q: "This Frasier revival series sees Kelsey Grammer's character return to Boston.", a: "What is Frasier?" },
        { q: "This series follows Halo's Master Chief in an adaptation of the video game franchise.", a: "What is Halo?" }
    ];
    return questions[Math.floor(Math.random() * questions.length)];
}

function generateSportsQuestion() {
    const questions = [
        { q: "This streaming service offers live NFL games every Sunday.", a: "What is NFL on CBS?" },
        { q: "The UEFA Champions League finals can be streamed live on this platform.", a: "What is Paramount+?" },
        { q: "This annual college basketball tournament is broadcast on CBS and Paramount+.", a: "What is March Madness?" },
        { q: "This soccer competition between European club teams airs exclusively on Paramount+.", a: "What is UEFA Champions League?" },
        { q: "CBS broadcasts this major NFL event every few years on rotation with other networks.", a: "What is the Super Bowl?" }
    ];
    return questions[Math.floor(Math.random() * questions.length)];
}

function generateBrandsQuestion() {
    const questions = [
        { q: "This streaming service combines CBS, Paramount Pictures, and Showtime content.", a: "What is Paramount+?" },
        { q: "This movie studio's mountain logo is one of the most recognizable symbols in entertainment.", a: "What is Paramount Pictures?" },
        { q: "This news organization was founded by William Paley and is known as the 'Tiffany Network'.", a: "What is CBS?" },
        { q: "This premium cable network merged with Paramount+ in 2023.", a: "What is Showtime?" },
        { q: "This children's network is home to SpongeBob SquarePants and is owned by Paramount.", a: "What is Nickelodeon?" }
    ];
    return questions[Math.floor(Math.random() * questions.length)];
}

function generateClassicMoviesQuestion() {
    const questions = [
        { q: "This 1972 mafia epic directed by Francis Ford Coppola won Best Picture.", a: "What is The Godfather?" },
        { q: "Tom Cruise returned to this role after 36 years in the 2022 blockbuster sequel.", a: "What is Top Gun: Maverick?" },
        { q: "This 1994 romantic comedy starring Tom Hanks features a famous box of chocolates quote.", a: "What is Forrest Gump?" },
        { q: "This 1953 Audrey Hepburn film follows a princess who explores Rome incognito.", a: "What is Roman Holiday?" },
        { q: "This 1950 sunset boulevard drama stars Gloria Swanson as Norma Desmond.", a: "What is Sunset Boulevard?" }
    ];
    return questions[Math.floor(Math.random() * questions.length)];
}

function generateRandomFinalJeopardy() {
    const finalQuestions = [
        {
            category: "STREAMING PIONEERS",
            question: "Launched in 1995 as CBS All Access, this service rebranded in 2021 to reflect its expanded content library and global ambitions.",
            answer: "What is Paramount+?"
        },
        {
            category: "ENTERTAINMENT HISTORY",
            question: "Founded in 1912, this studio's iconic mountain peak logo was inspired by Ben Lomond peak in Utah.",
            answer: "What is Paramount Pictures?"
        },
        {
            category: "TELEVISION MILESTONES",
            question: "In 2023, this media merger brought together CBS, Paramount+, and premium cable content under one streaming roof.",
            answer: "What is the Paramount-Showtime merger?"
        }
    ];
    return finalQuestions[Math.floor(Math.random() * finalQuestions.length)];
}

// Game Data
function generateGameData() {
    const gameData = {
        "categories": {
            "CBS": {},
            "SHOWTIME": {},
            "PARAMOUNT+ ORIGINAL": {},
            "SPORT": {},
            "BRANDS": {},
            "CLASSIC MOVIES": {}
        },
        "final_jeopardy": generateRandomFinalJeopardy()
    };

    // Generate questions for each value in each category
    for (let value = 1; value <= 5; value++) {
        gameData.categories["CBS"][value] = generateCBSQuestion();
        gameData.categories["SHOWTIME"][value] = generateShowtimeQuestion();
        gameData.categories["PARAMOUNT+ ORIGINAL"][value] = generateParamountPlusQuestion();
        gameData.categories["SPORT"][value] = generateSportsQuestion();
        gameData.categories["BRANDS"][value] = generateBrandsQuestion();
        gameData.categories["CLASSIC MOVIES"][value] = generateClassicMoviesQuestion();
    }

    return gameData;
}

// Initialize game data
let gameData = generateGameData();
            "2": {
                "question": "This animated Star Trek series follows the support crew on one of Starfleet's least important ships, the USS Cerritos.",
                "answer": "What is Star Trek: Lower Decks?"
            },
            "3": {
                "question": "Set before Captain Kirk's time, this series follows Captain Pike, Spock, and Number One exploring new worlds.",
                "answer": "What is Star Trek: Strange New Worlds?"
            },
            "4": {
                "question": "This 2024 film starring Michelle Yeoh focuses on the mysterious Section 31 organization within Starfleet.",
                "answer": "What is Star Trek: Section 31?"
            },
            "5": {
                "question": "Taking place 20 years after The Next Generation, this series follows the retired Jean-Luc Picard in a very different place in his life.",
                "answer": "What is Star Trek: Picard?"
            }
        },
        "YELLOWSTONE UNIVERSE": {
            "1": {
                "question": "This Taylor Sheridan series about the Dutton family's ranch empire has spawned multiple spinoffs and prequels.",
                "answer": "What is Yellowstone?"
            },
            "2": {
                "question": "This prequel follows the Dutton family as they embark on a journey west through the Great Plains in the 1880s.",
                "answer": "What is 1883?"
            },
            "3": {
                "question": "Billy Bob Thornton stars in this oil industry drama about securing land and mineral rights in West Texas boomtowns.",
                "answer": "What is Landman?"
            },
            "4": {
                "question": "This series follows the McLusky family, power brokers in a Michigan town where incarceration is the only thriving industry.",
                "answer": "What is Mayor of Kingstown?"
            },
            "5": {
                "question": "This 1920s-set prequel shows an earlier generation of Duttons during the Prohibition era and Great Depression.",
                "answer": "What is 1923?"
            }
        },
        "ANIMATION NATION": {
            "1": {
                "question": "This absorbent, yellow, and porous sea sponge lives in a pineapple under the sea in Bikini Bottom.",
                "answer": "Who is SpongeBob SquarePants?"
            },
            "2": {
                "question": "Starting in 2025, this long-running animated series about four Colorado elementary school kids became exclusive to Paramount+.",
                "answer": "What is South Park?"
            },
            "3": {
                "question": "This pink starfish is SpongeBob's best friend and neighbor, known for his simple-minded but well-meaning personality.",
                "answer": "Who is Patrick Star?"
            },
            "4": {
                "question": "The special 'Snow Yellow' featured this SpongeBob character deemed the 'squarest of them all' by evil Queen Karen.",
                "answer": "Who is SpongeBob SquarePants?"
            },
            "5": {
                "question": "This Patrick Star spinoff series features him living with his family including his parents Cecil and Bunny Star.",
                "answer": "What is The Patrick Star Show?"
            }
        },
        "CRIME TIME": {
            "1": {
                "question": "This long-running CBS procedural about Navy criminal investigators is currently in its 22nd season on Paramount+.",
                "answer": "What is NCIS?"
            },
            "2": {
                "question": "The BAU team returned in Season 18 of this FBI profiling series, also known as 'Evolution.'",
                "answer": "What is Criminal Minds?"
            },
            "3": {
                "question": "This forensics expert and serial killer, originally played by Michael C. Hall, got a prequel series called 'Original Sin' in 2024.",
                "answer": "Who is Dexter Morgan?"
            },
            "4": {
                "question": "Set in 1991 Miami, 'Original Sin' shows young Dexter learning to channel his darkness with guidance from this father figure.",
                "answer": "Who is Harry Morgan?"
            },
            "5": {
                "question": "Patrick Gibson plays the young version of this character in 'Dexter: Original Sin,' while Michael C. Hall voices his inner monologue.",
                "answer": "Who is Dexter Morgan?"
            }
        },
        "SHOWTIME ORIGINALS": {
            "1": {
                "question": "This survival thriller follows a girls' high school soccer team stranded in the wilderness after a plane crash.",
                "answer": "What is Yellowjackets?"
            },
            "2": {
                "question": "This Chicago-based drama series entered its seventh season in 2025, focusing on celebrations and tribulations of South Side residents.",
                "answer": "What is The Chi?"
            },
            "3": {
                "question": "Bryan Cranston stars as a judge who must protect his son at any cost in this crime drama series.",
                "answer": "What is Your Honor?"
            },
            "4": {
                "question": "This competition series hosted by RuPaul featured its 10th All Stars season premiering in May 2025.",
                "answer": "What is RuPaul's Drag Race All Stars?"
            },
            "5": {
                "question": "Dr. Orna Guralnik returned for Season 4 of this intimate documentary series following real couples in therapy.",
                "answer": "What is Couples Therapy?"
            }
        },
        "CLASSIC MOVIES": {
            "1": {
                "question": "This Francis Ford Coppola trilogy about the Corleone crime family is considered among the greatest films ever made.",
                "answer": "What is The Godfather?"
            },
            "2": {
                "question": "Tom Cruise reprised his role as Pete 'Maverick' Mitchell in this 2022 sequel about training new TOPGUN graduates.",
                "answer": "What is Top Gun: Maverick?"
            },
            "3": {
                "question": "Marlon Brando won the Best Actor Oscar for playing this patriarch of the Corleone family in the 1972 film.",
                "answer": "Who is Don Vito Corleone?"
            },
            "4": {
                "question": "This 1990s teen comedy starring Alicia Silverstone is an updated version of Jane Austen's 'Emma' set in Beverly Hills.",
                "answer": "What is Clueless?"
            },
            "5": {
                "question": "Instead of the theatrical version, Paramount+ features this 2020 re-edited version of The Godfather Part III.",
                "answer": "What is The Godfather Coda: The Death of Michael Corleone?"
            }
        }
    },
    "final_jeopardy": {
        "category": "PARAMOUNT+ ORIGINALS",
        "question": "This 2024 film marked Michelle Yeoh's return to the Star Trek universe, focusing on a mysterious organization within Starfleet that operates in the shadows.",
        "answer": "What is Star Trek: Section 31?"
    }
};

// Game State
let gameState = {
    players: [],
    currentPlayerIndex: 0,
    usedQuestions: new Set(),
    gameStarted: false,
    currentQuestion: null,
    timer: null,
    timeLeft: 30,
    audioEnabled: true,
    questionsAnswered: 0,
    totalQuestions: 30,
    setupPhase: true
};

// DOM Elements
const elements = {
    setupScreen: document.getElementById('setupScreen'),
    gameScreen: document.getElementById('gameScreen'),
    playerCount: document.getElementById('playerCount'),
    playerNames: document.getElementById('playerNames'),
    startGameBtn: document.getElementById('startGameBtn'),
    muteBtn: document.getElementById('muteBtn'),
    resetBtn: document.getElementById('resetBtn'),
    currentPlayer: document.getElementById('currentPlayer'),
    playerScores: document.getElementById('playerScores'),
    valuesGrid: document.getElementById('valuesGrid'),
    questionModal: document.getElementById('questionModal'),
    questionCategory: document.getElementById('questionCategory'),
    questionValue: document.getElementById('questionValue'),
    questionText: document.getElementById('questionText'),
    answerText: document.getElementById('answerText'),
    timer: document.getElementById('timer'),
    timerFill: document.getElementById('timerFill'),
    showAnswerBtn: document.getElementById('showAnswerBtn'),
    judgingButtons: document.getElementById('judgingButtons'),
    correctBtn: document.getElementById('correctBtn'),
    incorrectBtn: document.getElementById('incorrectBtn'),
    finalJeopardyModal: document.getElementById('finalJeopardyModal'),
    finalCategory: document.getElementById('finalCategory'),
    finalQuestion: document.getElementById('finalQuestion'),
    finalAnswer: document.getElementById('finalAnswer'),
    showFinalAnswerBtn: document.getElementById('showFinalAnswerBtn'),
    endGameBtn: document.getElementById('endGameBtn'),
    breakModal: document.getElementById('breakModal'),
    breakCountdown: document.getElementById('breakCountdown'),
    skipBreakBtn: document.getElementById('skipBreakBtn'),
    gameOverModal: document.getElementById('gameOverModal'),
    finalStats: document.getElementById('finalStats'),
    playAgainBtn: document.getElementById('playAgainBtn'),
    confettiCanvas: document.getElementById('confettiCanvas')
};

// Audio Context
let audioContext;
let backgroundMusic;

// Text-to-Speech - Professional Host Voice
let speechSynthesis;
let professionalVoice;

// Initialize the game
function initGame() {
    setupEventListeners();
    setupAudio();
    setupTextToSpeech();
    setupPlayerCount();
}

// Setup Text-to-Speech with Professional Voice
function setupTextToSpeech() {
    if ('speechSynthesis' in window) {
        speechSynthesis = window.speechSynthesis;
        
        // Function to find the best professional voice
        function findProfessionalVoice() {
            const voices = speechSynthesis.getVoices();
            
            // Preferred voice names for professional game show hosting
            const preferredVoices = [
                'Alex', 'Daniel', 'David', 'Microsoft David', 
                'Google US English', 'Bruce', 'Fred', 'Ralph'
            ];
            
            // Try to find a preferred voice
            for (const preferred of preferredVoices) {
                const voice = voices.find(v => v.name.includes(preferred));
                if (voice) return voice;
            }
            
            // Fallback to any English male voice
            const maleVoice = voices.find(v => 
                v.lang.startsWith('en') && 
                (v.name.toLowerCase().includes('male') || 
                 v.name.toLowerCase().includes('david') ||
                 v.name.toLowerCase().includes('alex'))
            );
            
            return maleVoice || voices.find(v => v.lang.startsWith('en')) || voices[0];
        }
        
        // Set voice immediately if available
        professionalVoice = findProfessionalVoice();
        
        // Update voice when voices change
        speechSynthesis.addEventListener('voiceschanged', () => {
            professionalVoice = findProfessionalVoice();
        });
    }
}

// Professional announcer speak function
function announceWithHost(text, rate = 1, pitch = 1.0, volume = 0.8) {
    if (!gameState.audioEnabled || !speechSynthesis) return;
    
    speechSynthesis.cancel(); // Cancel any ongoing speech
    
    const utterance = new SpeechSynthesisUtterance(text);
    if (professionalVoice) utterance.voice = professionalVoice;
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = volume;
    
    speechSynthesis.speak(utterance);
}

// Create Jeopardy intro music using Web Audio API
function createJeopardyIntro() {
    if (!audioContext) return;
    
    const duration = 3.0;
    const sampleRate = audioContext.sampleRate;
    const numSamples = duration * sampleRate;
    const audioBuffer = audioContext.createBuffer(1, numSamples, sampleRate);
    const channelData = audioBuffer.getChannelData(0);
    
    // Generate the classic "Think!" melody approximation
    const notes = [
        { freq: 523.25, start: 0.0, duration: 0.3 },    // C5
        { freq: 659.25, start: 0.3, duration: 0.3 },    // E5
        { freq: 783.99, start: 0.6, duration: 0.3 },    // G5
        { freq: 1046.50, start: 0.9, duration: 0.4 },   // C6
        { freq: 783.99, start: 1.3, duration: 0.3 },    // G5
        { freq: 659.25, start: 1.6, duration: 0.3 },    // E5
        { freq: 523.25, start: 1.9, duration: 0.6 }     // C5
    ];
    
    for (const note of notes) {
        const startSample = Math.floor(note.start * sampleRate);
        const endSample = Math.floor((note.start + note.duration) * sampleRate);
        
        for (let i = startSample; i < endSample && i < numSamples; i++) {
            const t = (i - startSample) / sampleRate;
            const envelope = Math.exp(-t * 2); // Decay envelope
            const sample = Math.sin(2 * Math.PI * note.freq * t) * envelope * 0.3;
            channelData[i] += sample;
        }
    }
    
    return audioBuffer;
}

// Play intro music
function playIntroMusic() {
    if (!audioContext || !gameState.audioEnabled) return;
    
    try {
        const introBuffer = createJeopardyIntro();
        const source = audioContext.createBufferSource();
        source.buffer = introBuffer;
        source.connect(audioContext.destination);
        source.start();
    } catch (e) {
        console.warn('Intro music playback failed:', e);
    }
}

// Setup audio
function setupAudio() {
    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        backgroundMusic = document.getElementById('backgroundMusic');
    } catch (e) {
        console.warn('Audio context not available');
    }
}

// Setup player count input
function setupPlayerCount() {
    elements.playerCount.addEventListener('input', updatePlayerInputs);
    updatePlayerInputs();
}

// Update player name inputs based on count
function updatePlayerInputs() {
    const count = parseInt(elements.playerCount.value) || 2;
    elements.playerNames.innerHTML = '';
    
    for (let i = 1; i <= count; i++) {
        const div = document.createElement('div');
        div.className = 'form-group';
        div.innerHTML = `
            <label class="form-label">Player ${i}:</label>
            <input type="text" class="form-control player-input" 
                   placeholder="Enter player name" value="Player ${i}">
        `;
        elements.playerNames.appendChild(div);
    }
}

// Setup event listeners
function setupEventListeners() {
    elements.startGameBtn.addEventListener('click', startGame);
    elements.muteBtn.addEventListener('click', toggleAudio);
    elements.resetBtn.addEventListener('click', resetGame);
    elements.showAnswerBtn.addEventListener('click', showAnswer);
    elements.correctBtn.addEventListener('click', () => judgeAnswer(true));
    elements.incorrectBtn.addEventListener('click', () => judgeAnswer(false));
    elements.showFinalAnswerBtn.addEventListener('click', showFinalAnswer);
    elements.endGameBtn.addEventListener('click', endGame);
    elements.skipBreakBtn.addEventListener('click', skipBreak);
    elements.playAgainBtn.addEventListener('click', resetGame);
}

// Start the game
function startGame() {
    // Get player names
    const playerInputs = document.querySelectorAll('.player-input');
    gameState.players = Array.from(playerInputs).map((input, index) => ({
        name: input.value.trim() || `Player ${index + 1}`,
        score: 0,
        breakTime: 0
    }));
    
    // Transition to game screen
    elements.setupScreen.style.display = 'none';
    elements.gameScreen.style.display = 'block';
    
    gameState.gameStarted = true;
    gameState.setupPhase = false;
    
    // Play intro music
    playIntroMusic();
    
    // Create game board
    createGameBoard();
    updatePlayerScores();
    updateCurrentPlayer();
    
    // Professional host introduction
    setTimeout(() => {
        announceWithHost("Welcome to Jeopardy! Today we are showcasing the finest entertainment from Paramount Plus.");
    }, 1000);
    
    setTimeout(() => {
        const categories = Object.keys(gameData.categories);
        const categoryText = categories.join(', ');
        announceWithHost(`Our categories today are: ${categoryText}.  Good luck, and remember to phrase your response in the form of a question!`);
    }, 7000);
    
    if (gameState.audioEnabled && backgroundMusic) {
        backgroundMusic.volume = 0.3;
        backgroundMusic.play().catch(e => console.warn('Background music failed:', e));
    }
}

// Create the game board
function createGameBoard() {
    // Regenerate game data each time the board is created
    gameData = generateGameData();
    
    const categories = Object.keys(gameData.categories);
    const values = ['1', '2', '3', '4', '5'];
    
    elements.valuesGrid.innerHTML = '';
    
    values.forEach(value => {
        categories.forEach(category => {
            const cell = document.createElement('div');
            cell.className = 'value-cell';
            cell.textContent = `${value} min`;
            cell.dataset.category = category;
            cell.dataset.value = value;
            cell.addEventListener('click', () => selectQuestion(category, value, cell));
            elements.valuesGrid.appendChild(cell);
        });
    });
}

// Update player scores display
function updatePlayerScores() {
    elements.playerScores.innerHTML = '';
    
    gameState.players.forEach((player, index) => {
        const div = document.createElement('div');
        div.className = 'player-score';
        if (index === gameState.currentPlayerIndex) {
            div.style.backgroundColor = 'rgba(255, 215, 0, 0.2)';
            div.style.borderLeft = '4px solid #FFD700';
        }
        
        div.innerHTML = `
            <span class="score-name">${player.name}</span>
            <span class="score-value">${player.score}</span>
        `;
        elements.playerScores.appendChild(div);
    });
}

// Update current player display
function updateCurrentPlayer() {
    elements.currentPlayer.textContent = gameState.players[gameState.currentPlayerIndex].name;
}

// Move to next player
function nextPlayer() {
    gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;
    updateCurrentPlayer();
    updatePlayerScores();
}

// Toggle audio
function toggleAudio() {
    gameState.audioEnabled = !gameState.audioEnabled;
    elements.muteBtn.textContent = gameState.audioEnabled ? '🔊 Audio' : '🔇 Muted';
    
    if (!gameState.audioEnabled) {
        speechSynthesis.cancel();
        if (backgroundMusic) backgroundMusic.pause();
    } else {
        if (gameState.gameStarted && backgroundMusic) {
            backgroundMusic.play().catch(e => console.warn('Background music failed:', e));
        }
    }
}

// Play sound effect
function playSound(soundId) {
    if (!gameState.audioEnabled) return;
    
    const sound = document.getElementById(soundId);
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(e => console.warn('Sound play failed:', e));
    }
}

// Select a question
function selectQuestion(category, value, cell) {
    if (!gameState.gameStarted || cell.classList.contains('used')) return;
    
    const questionKey = `${category}-${value}`;
    if (gameState.usedQuestions.has(questionKey)) return;
    
    playSound('clickSound');
    cell.classList.add('used');
    gameState.usedQuestions.add(questionKey);
    
    const questionData = gameData.categories[category][value];
    gameState.currentQuestion = {
        category,
        value: parseInt(value),
        question: questionData.question,
        answer: questionData.answer
    };
    
    showQuestionModal();
}

// Show question modal
function showQuestionModal() {
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    
    elements.questionCategory.textContent = gameState.currentQuestion.category;
    elements.questionValue.textContent = `${gameState.currentQuestion.value} min`;
    elements.questionText.textContent = gameState.currentQuestion.question;
    elements.answerText.style.display = 'none';
    elements.showAnswerBtn.style.display = 'inline-flex';
    elements.judgingButtons.style.display = 'none';
    
    elements.questionModal.style.display = 'block';
    
    playSound('revealSound');
    startTimer();
    
    // Professional host reads the question
    setTimeout(() => {
        const announcement = `${currentPlayer.name}, for ${gameState.currentQuestion.value} minute${gameState.currentQuestion.value > 1 ? 's' : ''} in ${gameState.currentQuestion.category}: ${gameState.currentQuestion.question}`;
        announceWithHost(announcement, 0.9, 1.0, 0.8);
    }, 500);
    
    // Add sparkle effect
    createSparkles(elements.questionModal);
}

// Start timer
function startTimer() {
    gameState.timeLeft = 30;
    elements.timer.textContent = gameState.timeLeft;
    elements.timerFill.style.width = '100%';
    elements.timer.classList.remove('warning');
    
    gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        elements.timer.textContent = gameState.timeLeft;
        elements.timerFill.style.width = `${(gameState.timeLeft / 30) * 100}%`;
        
        if (gameState.timeLeft <= 10) {
            elements.timer.classList.add('warning');
        }
        
        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timer);
            playSound('wrongSound');
            //showAnswer();
            announceWithHost("Time's up! Let's see the correct answer.");
        }
    }, 1000);
}

// Show answer - Modified flow: show answer first, then judging buttons
function showAnswer() {
    clearInterval(gameState.timer);
    
    elements.answerText.textContent = gameState.currentQuestion.answer;
    elements.answerText.style.display = 'block';
    elements.showAnswerBtn.style.display = 'none';
    elements.judgingButtons.style.display = 'flex'; // Show correct/incorrect buttons AFTER answer
    
    announceWithHost(`The correct answer is: ${gameState.currentQuestion.answer}`);
}

// Judge answer (correct or incorrect)
function judgeAnswer(isCorrect) {
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    
    if (isCorrect) {
        playSound('correctSound');
        // Add minutes to player's score
        currentPlayer.score += parseInt(gameState.currentQuestion.value);
        
        // Award break time (directly use the minutes value)
        const breakMinutes = parseInt(gameState.currentQuestion.value);
        currentPlayer.breakTime += breakMinutes;
        
        announceWithHost(`Correct! ${currentPlayer.name} earns ${breakMinutes} minutes of break time!`);
        
        // Create celebration effects
        createConfetti();
        createSparkles(document.body);
        
        setTimeout(() => showBreakModal(breakMinutes), 1500);
    } else {
        playSound('wrongSound');
        document.body.classList.add('screen-shake');
        setTimeout(() => document.body.classList.remove('screen-shake'), 500);
        
        // Deduct 1-2 minutes of break time for incorrect answers
        const penaltyMinutes = Math.floor(Math.random() * 2) + 1;
        currentPlayer.breakTime = Math.max(currentPlayer.breakTime - penaltyMinutes, 0);
        
        announceWithHost(`That's incorrect. ${currentPlayer.name} loses ${penaltyMinutes} minute${penaltyMinutes > 1 ? 's' : ''} of break time. Let's move on to our next player.`);
        setTimeout(() => closeQuestionModal(), 2000);
    }
    
    updatePlayerScores();
}

// Close question modal and move to next player
function closeQuestionModal() {
    elements.questionModal.style.display = 'none';
    nextPlayer();
    gameState.questionsAnswered++;
    
    if (gameState.questionsAnswered >= gameState.totalQuestions) {
        setTimeout(() => startFinalJeopardy(), 1000);
    }
}

// Show break modal
function showBreakModal(minutes) {
    elements.questionModal.style.display = 'none';
    elements.breakModal.style.display = 'block';
    
    let breakTimeLeft = minutes * 60; // Convert to seconds
    elements.breakCountdown.textContent = formatTime(breakTimeLeft);
    
    const breakTimer = setInterval(() => {
        breakTimeLeft--;
        elements.breakCountdown.textContent = formatTime(breakTimeLeft);
        
        if (breakTimeLeft <= 0) {
            clearInterval(breakTimer);
            elements.breakModal.style.display = 'none';
            closeQuestionModal();
        }
    }, 1000);
    
    elements.skipBreakBtn.onclick = () => {
        clearInterval(breakTimer);
        elements.breakModal.style.display = 'none';
        closeQuestionModal();
    };
}

// Skip break
function skipBreak() {
    elements.breakModal.style.display = 'none';
    closeQuestionModal();
}

// Start Final Jeopardy
function startFinalJeopardy() {
    announceWithHost("Ladies and gentlemen, it's time for Final Jeopardy! Here's your category and question.");
    
    elements.finalCategory.textContent = gameData.final_jeopardy.category;
    elements.finalQuestion.textContent = gameData.final_jeopardy.question;
    elements.finalAnswer.style.display = 'none';
    elements.showFinalAnswerBtn.style.display = 'inline-flex';
    elements.endGameBtn.style.display = 'none';
    
    elements.finalJeopardyModal.style.display = 'block';
    
    const finalMusic = document.getElementById('finalJeopardyMusic');
    if (gameState.audioEnabled && finalMusic) {
        finalMusic.volume = 0.4;
        finalMusic.play().catch(e => console.warn('Final Jeopardy music failed:', e));
    }
}

// Show final answer
function showFinalAnswer() {
    elements.finalAnswer.textContent = gameData.final_jeopardy.answer;
    elements.finalAnswer.style.display = 'block';
    elements.showFinalAnswerBtn.style.display = 'none';
    elements.endGameBtn.style.display = 'inline-flex';
    
    const finalMusic = document.getElementById('finalJeopardyMusic');
    if (finalMusic) finalMusic.pause();
    
    playSound('correctSound');
    announceWithHost(`And the correct answer is: ${gameData.final_jeopardy.answer}`);
}

// End game
function endGame() {
    elements.finalJeopardyModal.style.display = 'none';
    
    // Sort players by score for final display
    const sortedPlayers = [...gameState.players].sort((a, b) => b.score - a.score);
    
    elements.finalStats.innerHTML = '';
    sortedPlayers.forEach((player, index) => {
        const div = document.createElement('div');
        div.className = 'final-player-score';
        div.innerHTML = `
            <span class="final-player-name">${index === 0 ? '🏆 ' : ''}${player.name}</span>
            <span class="final-player-total">${player.score} min (${player.breakTime} min break)</span>
        `;
        elements.finalStats.appendChild(div);
    });
    
    elements.gameOverModal.style.display = 'block';
    
    createConfetti();
    
    const winner = sortedPlayers[0];
    announceWithHost(`Congratulations to our winner, ${winner.name}, with a final score of ${winner.score} minutes! Thank you for playing Jeopardy!`);
}

// Reset game
function resetGame() {
    // Reset game state
    gameState = {
        players: [],
        currentPlayerIndex: 0,
        usedQuestions: new Set(),
        gameStarted: false,
        currentQuestion: null,
        timer: null,
        timeLeft: 30,
        audioEnabled: gameState.audioEnabled,
        questionsAnswered: 0,
        totalQuestions: 30,
        setupPhase: true
    };
    
    // Show setup screen
    elements.setupScreen.style.display = 'block';
    elements.gameScreen.style.display = 'none';
    
    // Hide all modals
    elements.questionModal.style.display = 'none';
    elements.finalJeopardyModal.style.display = 'none';
    elements.breakModal.style.display = 'none';
    elements.gameOverModal.style.display = 'none';
    
    // Stop audio
    if (backgroundMusic) backgroundMusic.pause();
    const finalMusic = document.getElementById('finalJeopardyMusic');
    if (finalMusic) finalMusic.pause();
    
    speechSynthesis.cancel();
    
    // Reset player inputs
    updatePlayerInputs();
}

// Format time (seconds to MM:SS)
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Create sparkle effects
function createSparkles(container) {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            container.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 1000);
        }, i * 100);
    }
}

// Create confetti effect
function createConfetti() {
    const canvas = elements.confettiCanvas;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const colors = ['#FFD700', '#FF6B35', '#F7931E', '#00FF00', '#0000FF', '#FF0000'];
    
    // Create confetti particles
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: -10,
            vx: (Math.random() - 0.5) * 5,
            vy: Math.random() * 3 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 8 + 4,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            
            // Update position
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.1; // gravity
            p.rotation += p.rotationSpeed;
            
            // Draw particle
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation * Math.PI / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
            ctx.restore();
            
            // Remove particles that are off screen
            if (p.y > canvas.height + 10) {
                particles.splice(i, 1);
            }
        }
        
        if (particles.length > 0) {
            requestAnimationFrame(animate);
        }
    }
    
    animate();
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', initGame);

// Handle window resize for confetti canvas
window.addEventListener('resize', () => {
    const canvas = elements.confettiCanvas;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});