function multiply() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 * num2;
        document.getElementById('result').innerText = 'Result: ' + result;
    } else {
        document.getElementById('result').innerText = 'Please enter valid numbers';
    }
}

function divide() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        if (num2 === 0) {
            document.getElementById('result').innerText = 'Cannot divide by zero';
        } else {
            const result = num1 / num2;
            document.getElementById('result').innerText = 'Result: ' + result;
        }
    } else {
        document.getElementById('result').innerText = 'Please enter valid numbers';
    }
}


function LargestNumber() {
    const numb1 = parseFloat(document.getElementById('numb1').value);
    const numb2 = parseFloat(document.getElementById('numb2').value);
    const numb3 = parseFloat(document.getElementById('numb3').value);

    const result1 = Math.max(numb1, numb2, numb3);
    document.getElementById('result1').innerText = 'Result: ' + result1;
}

function Sum3() {
    const numbe1 = parseFloat(document.getElementById('numbe1').value);
    const numbe2 = parseFloat(document.getElementById('numbe2').value);

    if (numbe1 === numbe2) {
        const result2 = (numbe1 + numbe2)*3 ;
        document.getElementById('result2').innerText = 'Result: ' + result2;

    }
    else {
        const result2 = (numbe1 + numbe2);
        document.getElementById('result2').innerText = 'Result: ' + result2;

    }
}

function Close100() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);

    const temp1 = 100-number1;
    const temp2 = 100-number2;

    if (temp2 > temp1) {
        document.getElementById('result3').innerText = 'Result: ' + number2;
    }
    else if (temp1 > temp2) {
        document.getElementById('result3').innerText = 'Result: ' + number1;
    }
    else {
        document.getElementById('result3').innerText = 'False';
    }
}

function half(str) {
    const text = document.getElementById('text').value;

    const temp = Math.length(text);
    const temp1 = temp/2;

    if (temp1 === 0) {
        return str.slice(0, temp1);
    }
    else {
        return "Failed";
    }
}

function resofhalf() {
    const text = document.getElementById('text').value;
    const res = half(text);
    document.getElementById('result4').innerText = 'Result: ' + res;
}