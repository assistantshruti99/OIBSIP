function convertTemperature() {
    var temperature = parseFloat(document.getElementById('temperature').value);
    var unit = document.getElementById('unit').value;
    var resultElement = document.getElementById('result');
    
    if (isNaN(temperature)) {
      resultElement.textContent = 'Invalid temperature. Please enter a valid number.';
      return;
    }
    
    var convertedTemperature;
    var convertedUnit;
    
    if (unit === 'celsius') {
      convertedTemperature = (temperature * 9/5) + 32;
      convertedUnit = 'Fahrenheit';
    } else if (unit === 'fahrenheit') {
      convertedTemperature = (temperature - 32) * 5/9;
      convertedUnit = 'Celsius';
    } else if (unit === 'kelvin') {
      convertedTemperature = temperature - 273.15;
      convertedUnit = 'Celsius';
    }
    
    resultElement.textContent = 'Converted temperature: ' + convertedTemperature.toFixed(2) + ' ' + convertedUnit;
  }
  

  var convertBtn = document.getElementById('convertBtn');
  convertBtn.addEventListener('click', convertTemperature);