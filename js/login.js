// document.getElementById('id').addEventListener('click', function(){})

// search: form submit reloading the page


// step1: set event handler
document.getElementById('btn-login')
        .addEventListener('click', function(event){

            // step2: prevent default behaviour (prevent reloading browser)
            event.preventDefault();  // vejal

            // step3: get the phn number and pin
            const phoneNumber = document.getElementById('phn-num').value;
            const pinNumber = document.getElementById('pin-number').value;

            console.log(phoneNumber, pinNumber);

            // step4: validate phone and pin
            // this is temporary
            if(phoneNumber === '01931117198' && pinNumber === '1234'){
                console.log('You are logged in');
                window.location.href = '/home.html'

                // step5: allow users to use the website
            }
            else{
                alert('Wrong phone number or PIN')
            }


})