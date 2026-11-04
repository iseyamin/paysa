document.getElementById('add-money-btn').addEventListener('click',
    function(event){
        const amount =document.getElementById('amount').value;
        const amountt=parseFloat(amount);
        const pin=document.getElementById('pin').value;
        const pinn=parseInt(pin);
        const balance=document.getElementById('main-balance').innerText;
        const balancee=parseFloat(balance);

        if(pinn===1234){
           const sum=balancee+amountt;
           document.getElementById('main-balance').innerText=sum;
        }
        else console.log('nl')
        
    }
)