function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);

    const inputFieldValueString = inputField.value;

    const inputFieldValue = parseFloat(inputFieldValueString)

    return inputFieldValue;
}


// function getElementValueById(elementId){
//     const element = document.getElementById(elementId);

//     const elementValueString = element.innerText;
//     const value = parseFloat(elementValueString)
// }

function getTextElementvalueById(elementId){
    const textElement = document.getElementById(elementId);

    const textElementValueString = textElement.innerText;

    const textElementValue = parseFloat(textElementValueString);

    return textElementValue
}

function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);

    textElement.innerText = newValue;
}

document.getElementById('btn-deposit').addEventListener('click', function(){

    const newDepositAmount = getInputValueById('deposit-field');

    const previousDepositTotal = document.getTextElementvalueById('deposit-total');

    const newDepositTotal = newDepositAmount + previousDepositTotal;

    setTextElementValueById('deposit-total', newDepositTotal);

    const previousBalanceTotal = getTextElementvalueById('balance-total');

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    setTextElementValueById('balance-total', newBalanceTotal);
})