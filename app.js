

const calcBtn = document.querySelector('#calculate')
const tipBtns = document.querySelectorAll(".tip-percentages input[type='radio']")

function returnTipPercentage() {
    for(tipBtn of tipBtns) {
        if(tipBtn.checked) {
            return parseInt(tipBtn.value);
        }
    }
}

function returnTipAmount(billAmount, tipPercentage) {
    return ((parseFloat(billAmount) /100) * parseInt(tipPercentage)).toFixed(2)
    
}

function returnTotalperPerson(billAmount, tipTotal, noOfPpl) {
    return ((parseFloat(billAmount) + parseFloat(tipTotal)) / noOfPpl).toFixed(2);
}



calcBtn.addEventListener('click', () => {
    const tipAmount = document.querySelector('#tip-amount');
    const totalpp = document.querySelector('#total-per-person');
    const noOfPpl = document.querySelector('#number-of-people');
    const billAmount = document.querySelector('#bill-amount');
    const tipPercentage = returnTipPercentage();
    const tipTotal = returnTipAmount(billAmount.value,tipPercentage);
    tipAmount.innerText = tipTotal;
    totalpp.innerText = returnTotalperPerson(billAmount.value, tipTotal, noOfPpl.value)

})

