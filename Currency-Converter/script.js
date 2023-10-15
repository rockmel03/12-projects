const currencyFrom = document.getElementById('currency-first');
const currencyTo = document.getElementById('currency-second');
const amountFirst = document.getElementById('worth-first');
const amountSecond = document.getElementById('worth-second');
const exchangeRate = document.getElementById('exchange-rate');



update();

function update() {
    let apiKey = '63be2e436f823c1d8da29ead';
    let url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currencyFrom.value}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const rate = data.conversion_rates[currencyTo.value]
            exchangeRate.innerHTML = `1 ${currencyFrom.value} = ${rate} ${currencyTo.value}`
            amountSecond.value = (rate * amountFirst.value).toFixed(2)
        })
        .catch(error => {
            amountFirst.value = 0;
            amountSecond.value = 0;
            exchangeRate.innerHTML = `something went wrong please check your connection`

        })
}


currencyFrom.addEventListener('change', update);
currencyTo.addEventListener('change', update);
amountFirst.addEventListener('input', update);