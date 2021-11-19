let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");
let sentenceElement = document.querySelector(".js-sentence");
let Euro = 4.66;
let Dolar = 4.10;
let Dirham = 1.12;

formElement.addEventListener("input", () => {

    switch(currencyElement.value){
        case "Euro":
            result = amountElement.value * Euro;
            break;
        case "Dolar":
            result = amountElement.value * Dolar;
            break;
        case "Dirham":
            result = amountElement.value * Dirham;
            break;
    }

    sentenceElement.innerText = `${amountElement.value} ${"PLN"}`;
    resultElement.innerText = `${result.toFixed(2)} ${currencyElement.value}`;


});