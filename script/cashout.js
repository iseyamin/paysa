document.getElementById('cash-out-btn').addEventListener('click',
    function (event) {
        event.preventDefault();
        const amount = document.getElementById('cash-out-amount').value;
        const amountt = parseFloat(amount);
        const pin = document.getElementById('cash-out-pin').value;
        const pinn = parseInt(pin);
        const balance = document.getElementById('main-balance').innerText;
        const balancee = parseFloat(balance);
        const accountNumber = document.getElementById('cash-out-account-no').value;

        if (amount && pin && accountNumber) {
            if (accountNumber.length === 11) {
                if (pinn === 1234) {
                    const sum = balancee - amountt;
                    document.getElementById('main-balance').innerText = sum;
                }
                else alert('wrong pin');
                document.getElementById("cash-out-pin").value = " ";
            }
            else alert('invalid account digit')
        }
        else alert('fill the field first');

    }
)