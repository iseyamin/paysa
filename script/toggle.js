//default
 document.getElementById('cash-out').style.display='none';
  document.getElementById('cash-in').style.display='none';

//for add money
document.getElementById('add-money-box').addEventListener('click',
    function(event){
        document.getElementById('add-money-box').style.backgroundColor='pink'
         document.getElementById('cash-out-box').style.backgroundColor=''
        document.getElementById('cash-in').style.display='block';
        document.getElementById('cash-out').style.display='none';
         document.getElementById('fun').style.display='none';
        

    }
)

//for cash out
document.getElementById('cash-out-box').addEventListener('click',
    function(event){
        document.getElementById('cash-out-box').style.backgroundColor='pink'
         document.getElementById('add-money-box').style.backgroundColor=''
        document.getElementById('cash-in').style.display='none';
        document.getElementById('cash-out').style.display='block';
         document.getElementById('fun').style.display='none';

    }
)