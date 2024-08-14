let celsius = 14;
let celsiusToFahrenheit = celsius * 9 / 5 + 32;
let convertOutput1 = `${celsius}\u00B0C is ${celsiusToFahrenheit}\u00B0F`;
document.getElementById("fahrenheit").textContent = convertOutput1;

let fahrenheit = 57;
let fahrenheitToCelsius = (fahrenheit - 32) * 5 / 9;
let convertOutput2 = `${fahrenheit}\u00B0F is ${fahrenheitToCelsius.toFixed(1)}\u00B0C`;
document.getElementById("celsius").textContent = convertOutput2;