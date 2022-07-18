let msDisplay = 99;
let hundDisplay = 10;
let secondsDisplay = 1;
let minutesDisplay = 1;

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

function start() {
  isOn = 1;

  if (isOn === 1 && isRunning === 0) {
    minutesDisplay.textContent = "minutes";
    miliseconds = setInterval(msTimer, 10);
    hundreds = setInterval(hundTimer, 100);
    seconds = setInterval(secondsTimer, 1000);
  }
}
let stopWatch = document
  .querySelector("#stopBtn")
  .addEventListener("click", stop);

function stop() {
  isOn = 0;
  isRunning = 0;
  clearInterval(miliseconds);
  clearInterval(hundreds);
  clearInterval(seconds);
}

let cleartWatch = document
  .querySelector("#clearBtn")
  .addEventListener("click", clear);

function clear() {
  isOn = 0;
  isRunning = 0;
  stop();
  msCounter.textContent = 00;
  msDisplay = 99;
  hundCounter.textContent = 00;
  hundDisplay = 10;
  secCounter.textContent = 00;
  secondsDisplay = 1;
  minCounter.textContent = 00;
  minutesDisplay = 1;
}

// logic

let msTimer = () => {
  isRunning = 1;
  msCounter.textContent = `${msDisplay++}`;

  if (hundDisplay === 10) {
    hundDisplay = 00;
    hundCounter.textContent = 00;
  } else if (msDisplay > 100) {
    msDisplay = 00;
  } else if (msDisplay < 10) {
    msCounter.textContent += 00;
  }
};

let hundTimer = () => {
  isRunning = 1;
  hundCounter.textContent = `${hundDisplay++}`;
};

let secondsTimer = () => {
  isRunning = 1;

  secCounter.textContent = `${secondsDisplay++}`;
  if (secondsDisplay === 60) {
    hundDisplay = 0;
    secondsDisplay = 0;
    minCounter.textContent = minutesDisplay++;
  }
};
