var displayInput = document.getElementById("ShowDisplay");

function getButtonValue(num) {
    displayInput.value += num;
}
function calculateValue() {
var ans = eval(displayInput.value);
displayInput.value = ans;
}

function cleanAll() {
    displayInput.value = "";
}