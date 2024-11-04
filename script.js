function convertTemperature() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;

    if (isNaN(temperature)) {
        alert("Please enter a valid temperature.");
        return;
    }

    let celsius, fahrenheit, kelvin;

    if (unit === "celsius") {
        celsius = temperature;
        fahrenheit = (temperature * 9/5) + 32;
        kelvin = temperature + 273.15;
    } else if (unit === "fahrenheit") {
        celsius = (temperature - 32) * 5/9;
        fahrenheit = temperature;
        kelvin = celsius + 273.15;
    } else if (unit === "kelvin") {
        celsius = temperature - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = temperature;
    }

    document.getElementById("celsiusResult").innerText = `Celsius: ${celsius.toFixed(2)}`;
    document.getElementById("fahrenheitResult").innerText = `Fahrenheit: ${fahrenheit.toFixed(2)}`;
    document.getElementById("kelvinResult").innerText = `Kelvin: ${kelvin.toFixed(2)}`;
}
