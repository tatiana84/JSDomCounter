let counterDisplayElemenet = document.querySelector('.counter-display');
let counterMinusElement = document.querySelector('.counter-minus');
let counterPlusElement = document.querySelector('.counter-plus');

let count = 0;

updateDisplay();

counterPlusElement.addEventListener("click", () => {
    count++;
    updateDisplay();
});

counterMinusElement.addEventListener("click", () => {
    count--;
    if(count <= -1){
        return !count == 0;
    };   
    updateDisplay();
});

function updateDisplay() {
    counterDisplayElemenet.innerHTML = count;
};