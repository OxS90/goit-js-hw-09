// Descris în documentație
import flatpickr from 'flatpickr';
// Import suplimentar de stil
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix';

const startButton = document.querySelector('[data-start]');
const datePicker = document.querySelector('#datetime-picker');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    handleDatePickerClose(selectedDates);
  },
};

flatpickr(datePicker, options);

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTimerElements({ days, hours, minutes, seconds }) {
  const currentDays = daysEl.textContent;
  const currentHours = hoursEl.textContent;
  const currentMinutes = minutesEl.textContent;
  const currentSeconds = secondsEl.textContent;

  if (currentDays !== addLeadingZero(days)) {
    daysEl.textContent = addLeadingZero(days);
  }

  if (currentHours !== addLeadingZero(hours)) {
    hoursEl.textContent = addLeadingZero(hours);
  }

  if (currentMinutes !== addLeadingZero(minutes)) {
    minutesEl.textContent = addLeadingZero(minutes);
  }

  if (currentSeconds !== addLeadingZero(seconds)) {
    secondsEl.textContent = addLeadingZero(seconds);
  }
}

function handleDatePickerClose(selectedDates) {
  const selectedDate = selectedDates[0];

  if (selectedDate > new Date()) {
    startButton.disabled = false;
  } else {
    startButton.disabled = true;
    Notify.failure('Please choose a date in the future');
  }
}

startButton.addEventListener('click', function () {
  this.disabled = true;

  const targetDate = new Date(datePicker.value);
  let timeDiff = targetDate - new Date();

  const timerInterval = setInterval(function () {
    updateTimerElements(convertMs(timeDiff));
    if (timeDiff >= 1000) {
      timeDiff -= 1000;
    } else {
      clearInterval(timerInterval);
      Notify.success('Countdown has ended!');
    }
  }, 1000);
});
