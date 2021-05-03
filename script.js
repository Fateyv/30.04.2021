function getOperator() {
    let answerOperator = ''
    do {
        answerOperator = prompt('Enter the operation you want to do (+ - / *)');
    } while ((answerOperator !== '+') && (answerOperator !== '-') && (answerOperator !== '*') && (answerOperator !== '/'))
    return answerOperator;
}
const operator = getOperator();

function getFirstNumber() {
    let answerFirstNumber = '';
    const valid = true;
    do {
        answerFirstNumber = prompt('Enter the first number');
    } while (valid === isNaN(answerFirstNumber))
    return answerFirstNumber;
}

const firstNumber = +getFirstNumber();

function getSecondNumber() {
    let answerSecondNumber = '';
    const valid = true;
    do {
        answerSecondNumber = prompt('Enter the second number');
    } while (valid === isNaN(answerSecondNumber))
    return answerSecondNumber;
}

const secondNumber = +getSecondNumber();

function calculation() {
    let calcResult;
    switch(operator) {
        case '+':
            calcResult = firstNumber + secondNumber;
            break;
        case '-':
            calcResult = firstNumber - secondNumber;
            break;
        case '*':
            calcResult = firstNumber * secondNumber;
            break;
        case '/':
            calcResult = firstNumber / secondNumber;
            break;
    }
    return calcResult;
}

let result = calculation();

alert(`Your Answer: ${firstNumber}${operator}${secondNumber}=${result}`);