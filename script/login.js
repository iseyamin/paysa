//alert()

document.getElementById('login-btn').addEventListener('click',
    function(event){
       event.preventDefault();
       const accountNumber=document.getElementById('account-no').value;
       const pin=document.getElementById('pin').value;
       const pinn=parseInt(pin);
       if(accountNumber.length===11){
        if(pinn===1234){
           window.location.href="./main.html"
        }
        else alert('invalid pin')
       }
       else alert('invalid account digit')
    }
)