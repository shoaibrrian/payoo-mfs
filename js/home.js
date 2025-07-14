// add money to the account

/**
 * Step1: add event handler
 * prevent page reload after form submit
 * Step2: get money to be added to the account balance
 */

// step1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){
    // prevent page reload after form submit
    event.preventDefault();

    // step2: get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    
    console.log(addMoneyInput, );

    // get the pin number provided 
    const addPinInput = document.getElementById('input-pin').value;
    
    console.log(addPinInput)
})