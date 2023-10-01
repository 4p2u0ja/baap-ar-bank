//step 1
document.getElementById('btn-withdraw').addEventListener('click',function(){
       //step -2
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const newWithdrawAmount=parseInt(withdrawAmountString);
    //step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
     const withdrawTotalstring =withdrawTotalElement.innerText;
        const newwithdrawTotal= parseInt(withdrawTotalstring);
    //step- 4
    
    const addWithdraw = newWithdrawAmount + newwithdrawTotal;
    //step-5
    withdrawTotalElement.innerText= addWithdraw;


    ////step - 6 

        const withdrawBalance = document.getElementById('balance-total');
        const withdrawBalanceString = withdrawBalance.innerText;
        const newWithdrawBalance = parseInt(withdrawBalanceString);
        const balance2= newWithdrawBalance - newWithdrawAmount;
        
        withdrawBalance.innerText= balance2;
        // step- 7
          withdrawField.value = '';




})