// add money to the account

/**
 * Step1: add event handler
 * prevent page reload after form submit
 * Step2: get money to be added to the account balance
 * Step3: verify pin
 * Step4: Get the current balance
 */

// step1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){
    // prevent page reload after form submit
    event.preventDefault();

    // step2: get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    
    console.log(addMoneyInput, );

    // get the pin number provided 
    const pinNumber = document.getElementById('input-pin').value;

    console.log(pinNumber)

    // Step3: verify pin
    if(pinNumber === '1234'){
        // Step4: Get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);

        // step5: add  addMOneyInput with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const updateBalance = addMoneyNumber + balanceNumber
        console.log(updateBalance);


    // step6: update the balance in the UI
    document.getElementById('account-balance').innerText = updateBalance;
    }
    else{
        alert('Failed to add money. Please Try Again!')
    }
})