// document.getElementById('id').addEventListener('click', function(){})

// search: form submit reloading the page


// step1: set event handler
document.getElementById('btn-login')
        .addEventListener('click', function(event){

            // step2: prevent default behaviour (prevent reloading browser)
            event.preventDefault();  // vejal
            console.log('click');

            // step3: get the phn number 
            const phoneNumber = document.getElementById('phn-num').value;
            console.log(phoneNumber)


})