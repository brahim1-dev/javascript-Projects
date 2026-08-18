const myBar = document.querySelector('.myBar'),
    inputField = document.querySelector('input[type="password"]'),
    message = document.querySelector('.message')

    // console.log(inputField)

    inputField.addEventListener('input', (even) =>{
        const input = event.target.value;
        // console.log(input)
        myBar.style.width = `${input.length * 10}%`

        if(input.length <4){
            myBar.style.background = 'red';
            message.textContent = "Password Length: Easy!"

        }else if (input.length >=4 && input.length < 7){
            myBar.style.background = 'orange';
            message.textContent = "Password Length: Strong!"

        }else if (input.length > 7 ){
            myBar.style.background = 'green';
            message.textContent = "Password Length: Very Strong!"
        }
    })  