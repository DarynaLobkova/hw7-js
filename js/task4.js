
let counterValue = 0;
const btnDecrement = document.querySelector('[data-action = decrement]');
btnDecrement.addEventListener('click', () => {
 updateDisplay( -- counterValue);
  
})
const btnIncrement = document.querySelector('[data-action = increment]');
btnIncrement.addEventListener('click', () => {
    updateDisplay( ++ counterValue)
 
})

function updateDisplay(val) {
    document.getElementById("value").innerHTML = val;
}