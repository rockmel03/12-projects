const btnEl = document.getElementById('form-container');
const weightconditionEl = document.getElementById('weight-condition');
const BMI_resultEl = document.getElementById('result');


const calculateBMI = () => {
    const height = Number(document.getElementById('height').value);
    const weight = Number(document.getElementById('weight').value);
    const BMI_val = weight / ((height /100) * (height /100));
    BMI_resultEl.value = BMI_val.toFixed(2);

    if (BMI_val < 18.5) {
        weightconditionEl.innerText = 'Under Weight'
    } else 
    if (BMI_val >= 18.5 && BMI_val <= 24.9) {
        weightconditionEl.innerText = 'Normal Weight'
    } else 
    if (BMI_val >= 25 && BMI_val <= 29.9) {
        weightconditionEl.innerText = 'Over Weight'
    } else 
    if (BMI_val >= 30) {
        weightconditionEl.innerText = 'Obecity'
    }
}

btnEl.addEventListener('submit', (e) =>{
    e.preventDefault()
    calculateBMI()
})