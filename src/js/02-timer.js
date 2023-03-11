// Opisany w dokumentacji
import flatpickr from "flatpickr";
// Dodatkowy import stylów
import "flatpickr/dist/flatpickr.min.css";

//library replacement window.alert()
import Notiflix from 'notiflix';

//Biblioteka czeka na jej inicjalizację w elemencie input[type="text"], dlatego dodaliśmy do HTML input#datetime-picker.

const startInput = document.querySelector('input#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const days = document.querySelector('.value[data-days]');
const hours = document.querySelector('.value[data-hours]');
const minutes = document.querySelector('.value[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

const currentDate = Date.now();

let dateElClock = null;

startBtn.disabled = true;

//from homework
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        
        dateElClock = selectedDates[0];
        if (dateElClock > currentDate) {
            startBtn.disabled = false;
        }
        else { Notiflix.Notify.failure("Please choose a date in the future"); }
    }
};
    const flatpickrEl = new flatpickr(startInput, options);
    startBtn.addEventListener('click', updateClockRun);

    function updateClockRun(){

        const intervalId = setInterval(() => {
            const currentDate = Date.now();
            const deltaTime = dateElClock - currentDate;
            days.textContent = convertMs(deltaTime).days;
            hours.textContent = convertMs(deltaTime).hours;
            minutes.textContent = convertMs(deltaTime).minutes;
            seconds.textContent = convertMs(deltaTime).seconds;
            
            startBtn.disabled = true;
            flatpickrEl.input.setAttribute("disabled", "disabled")
            if (deltaTime < 1000) {
                clearInterval(intervalId);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                startBtn.disabled = false;
            }
        }, 1000);
}




function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days,hours,minutes,seconds};
}

//Funkcja pad() służy do "wypełnienia" wartości numerowej z przodu zadaną liczbą znaków.Funkcja przyjmuje argument value, który jest liczbą lub wartością, która może być rzutowana na typ string. Następnie funkcja konwertuje ten argument na typ string za pomocą String(value) i wykorzytsuje metode padStart() z liczbą znaków i wypełniaczem 


function pad(value) {
    return String(value).padStart(2,"0")
}