function convertCurrency() {
    var currencyFrom = document.getElementById('currencyFrom').value;
    var currencyTo = document.getElementById('currencyTo').value;
    var amount = parseFloat(document.getElementById('amount').value);
    var apiKey = '';
    var apiUrl = `https://api.exchangerate-api.com/v4/latest/${currencyFrom}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            var exchangeRate = data.rates[currencyTo];
            var convertedAmount = amount * exchangeRate;
            document.getElementById('result').innerText = amount + ' ' + currencyFrom + ' equals ' + convertedAmount.toFixed(2) + ' ' + currencyTo;
        })
        .catch(error => console.error('Error:', error));
}




var iframeElement = document.getElementById('container');
iframeElement.onload = function () {
    this.scrollIntoView({ behavior: "smooth", inline: "center" });
};
document.querySelector('a[href="#container"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('container').scrollIntoView({ behavior: "smooth", inline: "center" });
});


function showRates() {
    var buttonContainer = document.getElementById("buttonContainer");
    var exchangeRatesContainer = document.getElementById("exchangeRatesContainer");
    buttonContainer.style.display = "none";
    exchangeRatesContainer.style.display = "block";
}

function hideRates() {
    var buttonContainer = document.getElementById("buttonContainer");
    var exchangeRatesContainer = document.getElementById("exchangeRatesContainer");
    exchangeRatesContainer.style.display = "none";
    buttonContainer.style.display = "block";
}



function showChart(chartId) {
    var charts = document.querySelectorAll('.chart > div');
    charts.forEach(function(chart) {
    chart.style.display = 'none';
    });
    var selectedChart = document.getElementById(chartId);
    if (selectedChart) {
    selectedChart.style.display = 'block';
    }
    var chartContainer = document.querySelector('.chart');
    chartContainer.style.display = 'block';
}


function togglePopup() {
    var popup = document.getElementById("popup");
    popup.classList.toggle("show");
}




