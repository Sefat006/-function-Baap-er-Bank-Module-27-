




document.getElementById('btn-withdraw').addEventListener('click', function(){

    const newWithdrawAmount = getInputValueById('withdraw-field');

    const previousWithdrawTotal = getTextElementvalueById('withdraw-total');

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    setTextElementValueById('withdraw-total', newWithdrawTotal);

    const previousBalanceTotal = getTextElementvalueById('balance-total');

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    setTextElementValueById('balance-total', newBalanceTotal);
})