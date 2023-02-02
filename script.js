
function plus(){
    const firstNumber = parseFloat(document.getElementById("firstNumber").value);
    const secondNumber = parseFloat(document.getElementById("secondNumber").value);
    document.getElementById("result").innerText = firstNumber + secondNumber;
}
function minus(){
    const firstNumber = parseFloat(document.getElementById("firstNumber").value);
    const secondNumber = parseFloat(document.getElementById("secondNumber").value);
    document.getElementById("result").innerText = firstNumber - secondNumber;
}
function multiply(){
    const firstNumber = parseFloat(document.getElementById("firstNumber").value);
    const secondNumber = parseFloat(document.getElementById("secondNumber").value);
    document.getElementById("result").innerText = firstNumber * secondNumber;
}
function divide(){
    const firstNumber = parseFloat(document.getElementById("firstNumber").value);
    const secondNumber = parseFloat(document.getElementById("secondNumber").value);
    document.getElementById("result").innerText = firstNumber / secondNumber;
}