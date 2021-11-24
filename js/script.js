let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");
let sentenceElement = document.querySelector(".js-sentence");
let euro = 4.66;
let dolar = 4.10;
let dirham = 1.12;

formElement.addEventListener("input", () => {

    switch(currencyElement.value){
        case "euro":
            result = amountElement.value * euro;
            break;
        case "dolar":
            result = amountElement.value * dolar;
            break;
        case "dirham":
            result = amountElement.value * dirham;
            break;
    }

    sentenceElement.innerText = `${amountElement.value} ${"PLN"}`;
    resultElement.innerText = `${result.toFixed(2)} ${currencyElement.value}`;


});