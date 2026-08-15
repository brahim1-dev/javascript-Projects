/*
*/
let countNumber = document.querySelector('.number'),
    buttons = document.querySelectorAll('button'),
    currentNumber = 0;

for (const button of buttons) {
    button.addEventListener('click', ()=>{
        let clickBtn = button.textContent;

        // console.log(clickBtn)
        if(clickBtn.includes("increase")){
            currentNumber++

        }else if(clickBtn.includes("decrease")){
            currentNumber--
        }else{
            currentNumber=0;
        }
        // console.log(currentNumber)

        countNumber.textContent=currentNumber;


        if(currentNumber > 0){
            countNumber.style.color="green"
        }
        else if(currentNumber<0){
            countNumber.style.color="red"
        }else{
            countNumber.style.color="blue"
        }

    })
}



