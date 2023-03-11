//from content homework
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const startButton = document.querySelector("[data-start");
const stopButton = document.querySelector("[data-stop");
const bodyColor = document.querySelector('body');

let clockId = null;
startButton.disabled = false;
startButton.addEventListener("click)", () => {
    clockId = setInterval(() => {

        startButton.disabled = true;
        bodyColor.style.backgroundColor = getRandomHexColor();
    }, 1000);
});
  
stopButton.addEventListener("click", () => {
    clearInterval(clockId);
})


