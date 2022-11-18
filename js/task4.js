
let value = 0;

const btnDecrement = document.querySelector('[data-action = decrement]');
const btnIncrement = document.querySelector('[data-action = increment]');
const htmlValue = document.querySelector('#value')


function decrement() {
    value -= 1
    render();
}

function increment() {
    value += 1  
    render();
}

function render() {
    htmlValue.textContent = value;
}

btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);
