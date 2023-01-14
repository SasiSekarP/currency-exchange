'use strict';

const url = 'https://v6.exchangerate-api.com/v6/c5c8ba1aebae44331922bbd3/latest/';

const containerEl = document.getElementById('container');

function calculate() {
    let currencyOneValue = document.getElementById('currencyOne').value;
    let currencyTwoValue = document.getElementById('currencyTwo').value;
    let currencyTwoAmountEl = document.getElementById('currencyTwoAmount');
    let currencyOneAmountEl = document.getElementById('currencyOneAmount');


    fetch(`${url}${currencyOneValue}`).then((response) => response.json()).then((data) => {
        let rate = data.conversion_rates[currencyTwoValue];
        document.getElementById('rate').textContent = `1 ${currencyOneValue} = ${rate} ${currencyTwoValue}`;
        document.getElementById('currencyTwoAmount').textContent = (rate * document.getElementById('currencyOneAmount').value);
        currencyTwoAmountEl.value = (currencyOneAmountEl.value * rate);
    });
}

calculate();

containerEl.addEventListener('change', (e) => {
    e.preventDefault();
    calculate();
});
