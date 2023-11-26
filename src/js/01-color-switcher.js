const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.body;

let intervalId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
function changeBackgroundColor() {
  body.style.backgroundColor = getRandomHexColor();
}

function startChangeColor() {
  // dezactivare buton start
  startButton.disabled = true;
  // activare buton stop
  stopButton.disabled = false;
  // setare pornire schimbare background color, 1time/1s
  intervalId = setInterval(changeBackgroundColor, 1000);
}

function stopChangeColor() {
  // activare buton start
  startButton.disabled = false;
  // dezactivare buton stop
  stopButton.disabled = true;
  // stop schimbare de background color
  clearInterval(intervalId);
}
// adaugare event-uri pentru butoane
startButton.addEventListener('click', startChangeColor);
stopButton.addEventListener('click', stopChangeColor);
