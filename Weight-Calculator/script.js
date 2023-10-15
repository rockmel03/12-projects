const weightInputEl = document.getElementById('weight');
const resultEl = document.getElementById('result');
const errorEl = document.getElementById('error');


function update() {

    if (weightInputEl.value <= 0 || isNaN(weightInputEl.value)) {

        errorEl.innerText = 'Please enter a valid number';

        setTimeout(() => {
            errorEl.innerText = "";
            weightInputEl.value = ''
            resultEl.innerText = ''
        }, 2000)
    } else {

        const weight = +weightInputEl.value / 2.205
        resultEl.innerText = weight.toFixed(3)

        setTimeout(() => {
            weightInputEl.value = ''
            resultEl.innerText = ''
        }, 5000);
    }

}

weightInputEl.addEventListener('input', update)