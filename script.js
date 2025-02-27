function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        let expression = display.value;

        // Replace advanced operations with JavaScript equivalents
        expression = expression.replace(/mod/g, '%'); // Modulus
        expression = expression.replace(/sqrt\(/g, 'Math.sqrt('); // Square root
        expression = expression.replace(/pow\(/g, 'Math.pow('); // Power

        // Evaluate the expression
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}