function getOperator() {
    let answerOperator = '';
    do {
        answerOperator = prompt('Enter the operation you want to do (+ - / *)');
    } while ((answerOperator !== '+') && (answerOperator !== '-') && (answerOperator !== '*') && (answerOperator !== '/'))
    return answerOperator;
}
const operator = getOperator();

function getNumber(message) {
    let answerNumber = '';
    do {
        answerNumber = prompt(message);
    } while (isNaN(answerNumber))
    return +answerNumber;
}
const firstNumber = getNumber('Enter the first number');
const secondNumber = getNumber('Enter the second number');

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