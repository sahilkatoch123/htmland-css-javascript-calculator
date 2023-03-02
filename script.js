let runningTotal = 0;
let buffer = "0";
let previousoperater = null;

const screen = document.querySelector('.screen');
function buttonClick(value) {
    debugger;
    if (isNaN(value)) {
        // this is not a number
        handleSymbal(value);
    } else {
        //this is a number
        handleNumber(value);

    }
    screen.innerText = buffer;

}


function handleSymbal(symbol) {
    console.log('handleSymbal'.symbol);
    switch (symbol) {
        case 'c':
            buffer = '0';
            runningTotal = 0;
            break;
        case '=':
            if (previousoperater === null) {
                // need you two number to do math
                return;
            }
            flushOperation(parseInt(buffer));
            previousoperater = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
        case '←':
            if (buffer === 1) {
                buffer = '0'
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
    }
}
function handleMath(symbol) {
    if (buffer === '0') {
        // do nathing
        return;
    }
    const intBuffer = parseInt(buffer);

    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer)
    }
    previousoperater = symbol;
    buffer = '0';
}
function flushOperation(intBuffer) {
    if (previousoperater === '+') {
        runningTotal += intBuffer;
    } else if (previousoperater === '−') {
        runningTotal -= intBuffer;

    } else if (previousoperater === '×') {
        runningTotal *= intBuffer;
    } else if (previousoperater === '÷') {
        runningTotal /= intBuffer;
    }
    console.log('runningTotal', runningTotal)

}
function handleNumber(numberString) {
    if (buffer === "0") {
        buffer = numberString;
    } else {
        buffer += numberString;
    }

}

function init() {
    document.querySelector('.calc-buttons')
        .addEventListener('click', function (event) {
            buttonClick(event.target.innerText);
        })
}

init();