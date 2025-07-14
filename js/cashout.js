document.getElementById('btn-cashout').addEventListener('click', function (event) {
    event.preventDefault();
    const cashOut = document.getElementById('input-cashout').value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById('input-cashout-pin').value;

    console.log(cashOut, pinNumber);

    if (pinNumber === '1234') {
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        const updateBalance = balanceNumber - cashOutNumber;

        document.getElementById('account-balance').innerText = updateBalance;
    }
    else {
        alert('Failed to cashout. Please Try Again!')
    }

})