// Display element ko select karna
let display = document.getElementById('display');

// 1. Buttons click karne par display mein value jodna
function appendToDisplay(input) {
    display.value += input;
}

// 2. Display ko poora saaf karna (C button)
function clearDisplay() {
    display.value = "";
}

// 3. Ek-ek karke piche se digit hatana (DEL button)
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// 4. Result calculate karna (= button)
function calculateResult() {
    try {
        // eval() calculation ke liye best hai is level par
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}