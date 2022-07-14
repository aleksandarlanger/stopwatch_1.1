let msDisplay = 100;
let hundDisplay = 10;
let secondsDisplay = 1;
let minutesDisplay = 0;

//  More selectors

let msCounter = document.querySelector(".ms");
let hundCounter = document.querySelector(".hund");
let secCounter = document.querySelector(".sec");
let minCounter = document.querySelector(".min");

let isOn = 0;
let isRunning = 0;
let pause = 0;

// Start / Stop / clear buttons

let startWatch = document
  .querySelector("#startBtn")
  .addEventListener("click", start);
let stopWatch = document
  .querySelector("#stopBtn")
  .addEventListener("click", stop);

let cleartWatch = document
  .querySelector("#clearBtn")
  .addEventListener("click", clear);

// logic

function stop() {
  isOn = 0;
  isRunning = 0;
  clearInterval(miliseconds);
  clearInterval(hundreds);
  clearInterval(seconds);
  clearInterval(minutes);
}

function clear() {
  isOn = 0;
  stop();
  msCounter.textContent = 0;
  hundCounter.textContent = 0;
  secCounter.textContent = 0;
  minCounter.textContent = 0;
}

function start() {
  isOn = 1;

  if (isOn === 1 && isRunning === 0) {
    miliseconds = setInterval(msTimer, 10);
    hundreds = setInterval(hundTimer, 100);
    seconds = setInterval(secondsTimer, 1000);
    minutes = setInterval(minutesTimer, 60000);
  }
}

let msTimer = () => {
  isRunning = 1;
  msCounter.textContent = msDisplay++;

  if (hundDisplay === 10) {
    hundDisplay = 0;
  } else if (msDisplay > 100) {
    msDisplay = 0;
  }
};

let hundTimer = () => {
  isRunning = 1;
  hundCounter.textContent = hundDisplay++;
};

let secondsTimer = () => {
  isRunning = 1;
  secCounter.textContent = secondsDisplay++;
  if (secondsDisplay === 60) {
    hundDisplay = 0;
  }
};

let minutesTimer = () => {
  isRunning = 1;
  minCounter.textContent = minutesDisplay++;
};
