document.getElementById('cash-out-btn').addEventListener('click',
    function (event) {
        event.preventDefault();
        
        const amountt =getConvertedValueById('cash-out-amount');
        const pin = document.getElementById('cash-out-pin').value;
        const pinn = parseInt(pin);
        const balance = document.getElementById('main-balance').innerText;
        const balancee = parseFloat(balance);
        const accountNumber = document.getElementById('cash-out-account-no').value;

         if(amountt>balancee){
         alert('beda ahammok');
         document.getElementById('cash-out-pin').value = "";
         document.getElementById('cash-out-amount').value = "";
         return;
      }

        if (amountt && pin && accountNumber) {
            if (accountNumber.length === 11) {
                if (pinn === 1234) {
                    const sum = balancee - amountt;
                    document.getElementById('main-balance').innerText = sum;


                   //add into transaction
                    const container = document.getElementById('transactions');
               const p = document.createElement('p');
               p.innerText = `
                     withdraw ${amountt} from account: ${accountNumber}
                      `
               // console.log(p)
               container.appendChild(p);



                }
                else alert('wrong pin');
                document.getElementById("cash-out-pin").value = " ";
            }
            else alert('invalid account digit')
        }
        else alert('fill the field first');

    }
)