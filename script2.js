const conversionRates = {
    INR: { USD: 0.012, EUR: 0.011, AED: 0.044 },
    USD: { INR: 83.98, EUR: 0.91, AED: 3.67 },
    EUR: { INR: 92.53, USD: 1.10, AED: 4.05 },
    AED: { INR: 22.86, USD: 0.27, EUR: 0.25 },
};

function convertCurrency() {
    let amount = document.getElementById('amount').value;
    let fromCurrency = document.getElementById('fromCurrency').value;
    let toCurrency = document.getElementById('toCurrency').value;

    if (fromCurrency === toCurrency) {
        document.getElementById('result').textContent = "Select different currencies";
        return;
    }

    let result;
    if (conversionRates[fromCurrency] && conversionRates[fromCurrency][toCurrency]) {
        result = amount * conversionRates[fromCurrency][toCurrency];
        document.getElementById('result').textContent = `${result.toFixed(2)} ${toCurrency}`;
        document.getElementById('result').style.animation = 'fadeInScale 0.5s ease forwards';
    } else {
        document.getElementById('result').textContent = "Conversion not available";
    }
}