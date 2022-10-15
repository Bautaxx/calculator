

const numDisplay = document.querySelector('[data-display]');
let actualNumber = 0;

function add(num1,num2){
    return num1 + num2;
}

function substract(num1,num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1 / num2;
}

function operate(num1,num2,operator){
    console.log(num1, num2)
}



//OperationButtons will have the nodelist of the operation buttons
const operationButtons = document.querySelectorAll('[data-selection-operation]')
console.log(operationButtons)

//NumberButtons will have the nodelist of numberButtons
const numberButtons = document.querySelectorAll('[data-selection]')
console.log(numberButtons)

numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', e => {
        const selectedNumber = numberButton.dataset.selection //Stores number selected
        console.log(selectedNumber)
        actualNumber += selectedNumber
        numDisplay.innerText = actualNumber //Displays actual number
    }) 
})

operationButtons.forEach(operationButton => {
    operationButton.addEventListener('click', e => {
        const selectedOperation = operationButton.dataset.selectionOperation //Stores operation selected
        console.log(selectedOperation)
        num1 = parseInt(actualNumber)
        operator = selectedOperation
        actualNumber = '0'
        if(selectedOperation == '=') operate(num1,parseInt(actualNumber),operator)
        
        
        
    })
})
