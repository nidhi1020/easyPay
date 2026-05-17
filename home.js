const validPin=1234;

// function to get input values
function getInputValueNumber(id){
    const inputField=document.getElementById(id)
    const inputFieldValue=inputField.value
    const inputFieldValueNumber=parseInt(inputFieldValue)

    return inputFieldValueNumber
}

//
function getInputValue(id){
    const inputField=document.getElementById(id)
    const inputFieldValue=inputField.value
    return inputFieldValue
}

//add money feature
document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault()
    
    const bank=getInputValueNumber('bank')
    const accountNumber=document.getElementById('account-number').value
    const amount=getInputValueNumber('add-amount')
    const pin=getInputValueNumber('add-pin')


    if(accountNumber.length<11){
        alert('please provide valid account number')
        return;
    }

    if(pin!==validPin){
        alert('please provide valid pin number')
        return;    
    }
     
    const availableBalance=parseInt(document.getElementById('available-balance').innerText)

    const totalNewAvailableBalance=amount+availableBalance

    document.getElementById('available-balance').innerText=totalNewAvailableBalance

})

//cash out money feature

document.getElementById('withdraw-btn').addEventListener('click',function(e){
    e.preventDefault()

    const amount=getInputValueNumber('withdraw-amount')

    const availableBalance=parseInt(document.getElementById('available-balance').innerText)

    const agentNumber=document.getElementById('agent-num').value

    const withdrawPin=getInputValueNumber('w-pin')

    if(agentNumber.length<11){
        alert('please enter valid number')
        return
    }
    if(withdrawPin!==validPin){
        alert('please enter valid pin number')
        return
    }

    const totalNewAvailableBalance=availableBalance-amount
    document.getElementById('available-balance').innerText=totalNewAvailableBalance


})

//toggling features

document.getElementById('add-button').addEventListener('click',function(){
    document.getElementById('cash-out-parent').style.display='none'
    document.getElementById('add-money-parent').style.display='block'

})
document.getElementById('cash-out-button').addEventListener('click',function(){
    document.getElementById('add-money-parent').style.display='none'
    document.getElementById('cash-out-parent').style.display='block'

})


