const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = 'Error';
    }
}

function percentage() {
    try {
        let value = eval(display.value);
        display.value = (value / 100).toString();
    } catch(error) {
        display.value = 'Error';
    }
}

function toggleSign() {
    try {
        if (display.value) {
            if (display.value.charAt(0) === '-') {
                display.value = display.value.slice(1);
            } else {
                display.value = '-' + display.value;
            }
        }
    } catch(error) {
        display.value = 'Error';
    }
}