function appendValue(elementId, newValue) {
    const inputElement = document.getElementById('elementId')
    return;
}

let toggle = false;

function calculate() {
    const value = document.getElementById('inputBox').value;
   
    try {
        let answer = eval(value);
        console.log("Logged");
    }
    catch(error) {
        console.log("Error");
    }
    
    
    
}
function btn1Click() {
    let input = document.getElementById("inputBox");
    let text = toggle ? "1" : "1";
    input.value += text;
    toggle = !toggle;
}
function btn2Click() {
    let input = document.getElementById("inputBox");
    let text = toggle ? "2" : "2";
    input.value += text;
    toggle = !toggle;
}

function btn3Click() {
    let input = document.getElementById("inputBox");
    let text = toggle ? "3" : "3";
    input.value += text;
    toggle = !toggle;
}
function btn4Click() {
    let input = document.getElementById("inputBox");
    let text = toggle ? "4" : "4";
    input.value += text;
    toggle = !toggle;
}

function btn5Click() {
    let input = document.getElementById("inputBox");
    let text = toggle ? "5" : "5";
    input.value += text;
    toggle = !toggle;
}

function btn6Click() {
    let input = document.getElementById("inputBox");
    let text = toggle ? "6" : "6";
    input.value += text;
    toggle = !toggle;
}

function btn7Click() {
    let input = document.getElementById("inputBox");
    let text = toggle ? "7" : "7";
    input.value += text;
    toggle = !toggle;
}
function btn8Click() {
    let input = document.getElementById("inputBox");
    let text = toggle ? "8" : "8";
    input.value += text;
    toggle = !toggle;
}
function btn9Click() {
    let input = document.getElementById("inputBox");
    let text = toggle ? "9" : "9";
    input.value += text;
    toggle = !toggle;
}
function btn0Click() {
    let input = document.getElementById("inputBox");
    let text = toggle ? "0" : "0";
    input.value += text;
    toggle = !toggle;
}
function btnMultiply() {
    let input = document.getElementById("inputBox");
    let text = toggle ? "*" : "*";
    input.value += text;
    toggle = !toggle;
}
function btnPeriod() {
    let input = document.getElementById('inputBox');
    let text = toggle ? "." : ".";
    input.value += text;
    toggle = !toggle;
}
function btnDivision() {
    let input = document.getElementById('inputBox');
    let text = toggle ? "/" : "/";
    input.value += text;
    toggle = !toggle;
}
function btnDash() {
    let input = document.getElementById("inputBox");
    let text = toggle ? "-" : "-";
    input.value += text;
    toggle = !toggle;
}
function btnSubtract() {
    let input = document.getElementById("inputBox");
    let text = toggle ? "-" : "-";
    input.value += text;
    toggle = !toggle;
}
function btnAdd() {
    let input = document.getElementById("inputBox");
    let text = toggle ? "+" : "+";
    input.value += text;
    toggle = !toggle;
}
function btnClear() {
    const input = document.getElementById("inputBox");
    input.value = '';
}
