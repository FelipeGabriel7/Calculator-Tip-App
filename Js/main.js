const valueAccount = document.querySelector('.iptn-value');
const numberPeople = document.querySelector('.iptn-people-number');
const btnPercent = document.querySelectorAll('.btn');
const customTip = document.querySelector('.custom-iptn-tip');
const reset = document.querySelector('.reset-value')

const amount = document.querySelector('.result-calculator-amount-value');
const total = document.querySelector('.result-calculator-amount-value-total');
const divIptn = document.querySelectorAll('.iptn-background');

const errorInput = document.querySelectorAll('.error-message')

let valuePercent = 0;
let resultTotal = 0;
let resultAmount = 0;



function calculate(){
   
    btnPercent.forEach((btn) => {
        btn.addEventListener('click' , () => {

            if(numberPeople.value === 0 || numberPeople.value === null || numberPeople.value === '') return errorMessage(' O numero deve ser diferente de 0')
            if(valueAccount.value === 0 || valueAccount.value === null || valueAccount.value === '') return errorMessage(' O numero deve ser diferente de 0 ');

    
            valuePercent = Number((btn.value / 100) * numberPeople.value);

            resultAmount = ((valueAccount.value / numberPeople.value)  * valuePercent) ;
            resultTotal = valueAccount.value / numberPeople.value;
            amount.innerHTML = ' $ ' + resultAmount.toFixed(2)
            total.innerHTML = ' $ ' + resultTotal.toFixed(2)

            valuePercent = 0;
   
        })
    }) 
    
    customTip.addEventListener('change' , (e) => {
        
        if(numberPeople.value === 0 || numberPeople.value === null || numberPeople.value === '' ) return errorMessage(' O numero deve ser diferente de 0');
        if(valueAccount.value === 0 || valueAccount.value === null || valueAccount.value === '' ) return errorMessage(' O numero deve ser diferente de 0 ');

        valuePercent = Number((e.target.value / 100) * numberPeople.value);

        resultAmount = ((valueAccount.value / numberPeople.value)  * valuePercent) ;
        resultTotal = valueAccount.value / numberPeople.value;

        amount.innerHTML = ' $ ' + resultAmount.toFixed(2)
        total.innerHTML = ' $ ' + resultTotal.toFixed(2)

        valuePercent = 0;
        e.target.value = '';
    })
}


function resetValues(){
    reset.addEventListener('click' , () => {

        valueAccount.value = '';
        numberPeople.value = '';

        amount.innerHTML = ' $ ' + '0.00'
        total.innerHTML = ' $ ' + '0.00'
    })
}


function errorMessage(error){

    divIptn.forEach(di => {
        di.classList.add('error-outline')

        setTimeout(() => {
            di.classList.remove('error-outline')
        } , 3000)
    })

    errorInput.forEach(err => {
        err.classList.add('error-iptn')
        err.innerHTML = error

        setTimeout(() => {
            err.classList.remove('error-outline')
            err.innerHTML = ''
        } , 2500)
    })

}

resetValues()
calculate()

