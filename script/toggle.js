//default
 document.getElementById('cash-out').style.display='none';
  document.getElementById('cash-in').style.display='none';
   document.getElementById('transaction').style.display='none';

//for add money
document.getElementById('add-money-box').addEventListener('click',
    function(event){
        document.getElementById('add-money-box').style.backgroundColor='pink'
         document.getElementById('cash-out-box').style.backgroundColor=''
         boxColor('transaction-box','')
         
        document.getElementById('cash-in').style.display='block';
        document.getElementById('cash-out').style.display='none';
         document.getElementById('fun').style.display='none';
         displayStatus('transaction',"none");
        

    }
)

//for cash out
document.getElementById('cash-out-box').addEventListener('click',
    function(event){
        
         boxColor('cash-out-box','pink')
         boxColor('add-money-box','')
         boxColor('transaction-box','')

        displayStatus('cash-out',"block");
        displayStatus('cash-in',"none");
        displayStatus('fun',"none");
        displayStatus('transaction',"none");

    }
)

//for transaction
document.getElementById('transaction-box').addEventListener('click',
    function(event){
        boxColor('transaction-box','pink')
         boxColor('add-money-box','')
         boxColor('cash-out-box','')

        displayStatus('transaction',"block");
        displayStatus('cash-in',"none");
        displayStatus('cash-out',"none");
        displayStatus('fun',"none");
    }
)