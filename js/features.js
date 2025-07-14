// show the cash out form
document.getElementById('show-cashout-btn').addEventListener('click', function(){

    // show cash out button
    document.getElementById('cashout-form').classList.remove('hidden')

    // hide the add money form
    document.getElementById('add-money-form').classList.add('hidden');
})

// show add money form
document.getElementById('show-add-money-btn').addEventListener('click', function(){

    // hide cash out button
    document.getElementById('cashout-form').classList.add('hidden')

    // show the add money form
    document.getElementById('add-money-form').classList.remove('hidden');
})