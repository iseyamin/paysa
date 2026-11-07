// document.getElementById('add-money-btn').addEventListener('click',
//     function(event){
//          event.preventDefault();
//         const amount =getValueById('amount');
//         const amountt=parseFloat(amount);
//         const pin=document.getElementById('pin').value;
//         const pinn=parseInt(pin);
//         const balance=document.getElementById('main-balance').innerText;
//         const balancee=parseFloat(balance);
//         const id=document.getElementById('account-no').value;

//        if(amount && pin && id){
//          if(id.length===11){
//           if(pinn===1234){
//            const sum=balancee+amountt;
//            document.getElementById('main-balance').innerText=sum;
//         }
//         else alert('wrong pin');
//         document.getElementById("pin").value = "";
//          }
//          else alert('enter 11 digit id')
//        }
//        else alert('fill the field first');

//     }
// )

document.getElementById('add-money-btn').addEventListener('click',
   function (event) {
      event.preventDefault();
      const amount = getConvertedValueById('amount');
      const pin = getConvertedValueById("pin");
      const balance = getConvertedTextById('main-balance');
      const id = getValueById('account-no');
      const bank=document.getElementById('bank').value;

      if(amount<0){
         alert('beda fokir');
         document.getElementById('pin').value = "";
         document.getElementById('amount').value = "";
         return;
      }
     

      if (amount && pin && id) {
         if (id.length === 11) {
            if (pin === 1234) {
               const sum = balance + amount;
               document.getElementById('main-balance').innerText = sum;


               //add into transaction
               const container = document.getElementById('transactions');
              const divv=document.createElement('div');
             divv.classList.add('mb-5');
              divv.innerHTML=`
              <h1 class="text-rose-700 font-semibold text-lg text-center">Add money</h1>
              <p>${amount}$ added by ${bank}</p>
              <h2>Account: ${id}</h2>
              `
              container.appendChild(divv)


            }
            else alert('wrong pin')
            document.getElementById('pin').value = "";
         }
         else alert('enter 11 digit id');
      }
      else alert('fill all the field first')
   }
)


