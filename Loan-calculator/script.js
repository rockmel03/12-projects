const amountInputEl = document.getElementById("amount");
const rateInputEl = document.getElementById("rate");
const monthsInputEl = document.getElementById("months");
const result = document.getElementById("result");

update();
function update() {
  const loanAmountValue = amountInputEl.value;
  const interestRateValue = rateInputEl.value;
  const monthsToPayValue = monthsInputEl.value;

  const interest = (loanAmountValue * (interestRateValue * 0.01)) / monthsToPayValue;

  const installment = loanAmountValue / monthsToPayValue + interest;

  result.innerHTML = (installment).toFixed(2);
}

amountInputEl.addEventListener("input", update);
rateInputEl.addEventListener("input", update);
monthsInputEl.addEventListener("input", update);
