import { Notify } from 'notiflix';

const form = document.querySelector('.form')
form.addEventListener('submit', onFormSubmit);


//onFormSubmit - przypisuję funkcję do zdarzenia wysłania formularza, pętlą tworzę obietnice z zadanymi krokami (delay, step, amount z zdania) z funkcją createPromise

function onFormSubmit (e){
  e.preventDefault();

  let {delay, step, amount} = e.currentTarget;
   delay= Number(delay.value);
   step= Number(step.value);
   amount= Number(amount.value);
  
for (let position =1; position <= amount; position+=1){
 createPromise(position, delay)
.then(onMakeOrderSuccess)
.catch(onMakeOrderError)
delay += step;}
}
// gdy obietnica będzie poprawnie wywołuje funkcję onMakeOrderSucces, gdy bedzie odrzucona onMakeOrderError

const onMakeOrderSuccess =({ position, delay }) =>{
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
  }
const onMakeOrderError = ({ position, delay }) =>{
    Notify.success(`❌ Rejected promise ${position} in ${delay}ms`)
  }
  
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => { 
    if (shouldResolve) {
      resolve({ position, delay }
      );
    } else {
      reject({ position, delay }
      );
    }
  }, delay);
  });
}