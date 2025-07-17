document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');


    if(isNaN(addMoney)){
        alert('Failed to add Money');
        return;
    }

    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney;

        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction history
        const entry = document.createElement('p');
        pinNumber.innerText = `Added: ${addMoney} TK. New Balance: ${newBalance}`;

        // should be a common function
        document.getElementById('transaction-container').appendChild(entry)
    }
    else{
        alert('Failed to add MONEY!')
    }
})