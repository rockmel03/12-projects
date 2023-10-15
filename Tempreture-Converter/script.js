const inputField = document.getElementsByClassName('tempreture');
const celciusEl = document.getElementById('celcius')
const fahrenheitEl = document.getElementById('fahrenheit')
const kelvinEl = document.getElementById('kelvin')


for (i = 0; i < inputField.length; i++) {
    inputField[i].addEventListener('change', (e) => {
        let currentValue = Number(e.target.value);
        switch (e.target.name) {
            case 'celcius':
                fahrenheitEl.value = ((currentValue * 9 / 5) + 32).toFixed(2);
                kelvinEl.value = (currentValue + 273.15).toFixed(2);
                break;
            case 'fahrenheit':
                celciusEl.value = ((currentValue - 32) * 5 / 9).toFixed(2);
                kelvinEl.value = (((currentValue - 32) * 5 / 9 + 273.15)).toFixed(2);
                break;
            case 'kelvin':
                celciusEl.value = (currentValue - 273.15).toFixed(2);
                fahrenheitEl.value = ((currentValue - 273.15) * 9 / 5 + 32).toFixed(2);
                break;
            default:
                break;
        }
    })
};