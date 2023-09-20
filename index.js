let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let homeFoulsEl = document.getElementById("home-fouls");
let guestFoulsEl = document.getElementById("guest-fouls");
let periodEl = document.getElementById("period");
let periodBtn = document.getElementById("period-btn");
let timerEl = document.getElementById("timer");
let homeTitleEl = document.getElementById("home-title");
let guestTitleEl = document.getElementById("guest-title");

let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");

let minutesEl = document.getElementById("minute");
let secondsEl = document.getElementById("second");

let homeScore = 0;
let guestScore = 0;
let homeFoul = 0;
let guestFoul = 0;
let period = 0;

let timerInterval;
let minute = 00;
let second = 00;
let isRunning = false;

function start() {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(updateTimer, 1000);
    }
}

function stop() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timerInterval);
    }
}

function reset() {
    stop();
    minute = 0;
    second = 0;
    updateTimerDisplay();
}

function updateTimer() {
    second++;
    if(second == 60) {
        second = 0;
        minute++;
    }
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const formattedMinutes = String(minute).padStart(2, "0");
    const formattedSeconds = String(second).padStart(2, "0");
    minutesEl.textContent = formattedMinutes;
    secondsEl.textContent = formattedSeconds;
}

function addPeriod() {
    period++;
    periodEl.textContent = period;
}

function add1PointHome() {
    homeScore++;
    homeScoreEl.textContent = homeScore;
    leader();
}

function add2PointsHome() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
    leader();
}

function add3PointsHome() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
    leader();
}

function add1PointGuest() {
    guestScore++;
    guestScoreEl.textContent = guestScore;
    leader();
}

function add2PointsGuest() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
    leader();
}

function add3PointsGuest() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
    leader();
}

function addFoulHome() {
    homeFoul++;
    homeFoulsEl.textContent = homeFoul;
}

function addFoulGuest() {
    guestFoul++;
    guestFoulsEl.textContent = guestFoul;
}


function leader() {
    if (homeScore > 0 && homeScore > guestScore) {
        homeTitleEl.style.color = "#6EE7B7";
        guestTitleEl.style.color = "";
    } else if (guestScore > 0 && guestScore > homeScore) {
        guestTitleEl.style.color = "#6EE7B7";
        homeTitleEl.style.color = "";
    } else {
        guestTitleEl.style.color = "";
    }
}

function newGame() {
    homeScore = 0;
    guestScore = 0;
    homeFoul = 0;
    guestFoul = 0;
    period = 0;
    
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
    homeFoulsEl.textContent = homeFoul;
    guestFoulsEl.textContent = guestFoul;    
    periodEl.textContent = period;
}