function calculating(num) {
    var result = document.getElementById("input")
        // result.value += num;
    var lastindex = result.value.slice(result.value.length - 1);
    var operators = ["+", "-", "*", "/"];
    if (operators.indexOf(lastindex) !== -1 && operators.indexOf(num) !== -1) {
        var newValue = result.value.slice(0, result.value.length - 1)
        result.value = newValue + num
    } else {
        result.value += num
    }
}

function Operation() {
    final = document.getElementById("input");
    final.value = eval(final.value)
}


function clearall() {
    var result = document.getElementById("input")
    result.value = "";
}