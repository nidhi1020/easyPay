//login button functionality

document.getElementById('loginBtn').addEventListener('click',function(e){
    e.preventDefault()

    const mobileNumber=12345678901
    const pinNumber=1234

    const mobileNumberValue=document.getElementById('mobile-number').value
    const pinNumberValue=document.getElementById('pin-number').value

    const mobileNumberValueConverted=parseInt(mobileNumberValue)
    const pinNumberValueConverted=parseInt(pinNumberValue)

    if(mobileNumberValueConverted===mobileNumber && pinNumberValueConverted===pinNumber){
        window.location.href="./home.html"
    }
    else{
        alert('invalid  credentials')
    }

})