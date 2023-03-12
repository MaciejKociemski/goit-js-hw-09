import Notiflix from "notiflix";

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmitForm);
function onSubmitForm(e) {
  e.preventDefault();
  let { delay, step, amount } = e.currentTarget;
   delay= Number(delay.value);
   step= Number(step.value);
   amount= Number(amount.value);
  
}




function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }  


}

