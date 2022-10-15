
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
    let result;
    int1 = parseInt(num1)
    int2 = parseInt(num2)
    if(operator == '+') result = add(int1,int2)
    else if(operator == '*') result = multiply(int1,int2)
    else if(operator == '/') result = divide(int1,int2)
    else  result = substract(int1,int2)
    return result;
}

function performOperations(operations){
    let finalResult = operate(operations[0],operations[2],operations[1])
    if(operations.length > 3){
        for (let i = 3; i < operations.length; i += 2) {
            finalResult = operate(finalResult,operations[i + 1], operations[i]) 
        }
    }
    return finalResult
}

function clearFunction(){
    numDisplay.innerText = '0'
    actualNumber = '0'
    operationsArray = []
}

let actualNumber = 0;
let operationsArray = [];


const numDisplay = document.querySelector('[data-display]');
const operationButtons = document.querySelectorAll('[data-selection-operation]')
const numberButtons = document.querySelectorAll('[data-selection]')


numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', e => {
        const selectedNumber = numberButton.dataset.selection //Stores number selected
        actualNumber += selectedNumber
        numDisplay.innerText = actualNumber //Displays actual number
    }) 
})

operationButtons.forEach(operationButton => {
    operationButton.addEventListener('click', e => {
        let endResult;

        const selectedOperation = operationButton.dataset.selectionOperation //Stores operation selected
        if(selectedOperation == 'clear'){ 
            clearFunction()
        }
        else if(selectedOperation != '='){
            if(operationsArray[operationsArray.length - 1] == '/' && parseInt(actualNumber) == 0){ 
                alert('You cannot divide by 0');
                clearFunction()
            }  
            else{
                operationsArray.push(actualNumber)
                operationsArray.push(selectedOperation)
                actualNumber = '0'      
            }
        }
        else {
            if(operationsArray[operationsArray.length - 1] == '/' && parseInt(actualNumber) == 0){ 
                alert('You cannot divide by 0');
                clearFunction()
            }  
            else{
                operationsArray.push(actualNumber)
                endResult = performOperations(operationsArray)
                numDisplay.innerText = Math.round(endResult)
                actualNumber = endResult
                operationsArray = []
            }
        }
    })
})
