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
    
     // step- 7 // if ar niche thakle input field khali hoy na
     withdrawField.value = '';

    ////step - 6 

        const withdrawBalance = document.getElementById('balance-total');
        const withdrawBalanceString = withdrawBalance.innerText;
        const newWithdrawBalance = parseInt(withdrawBalanceString);

       if(newWithdrawAmount>newWithdrawBalance){
        alert('fuck you')
        return; // aikhne return na dile balance ar calculation neg asbe
       }

       

         //step- 4 // if ar condition ar jonno step 4 k nike ana hoise naile withdaraw te tk show kore 
    
    const addWithdraw = newWithdrawAmount + newwithdrawTotal;
    
    //step-5
    withdrawTotalElement.innerText= addWithdraw;

          

        const balance2= newWithdrawBalance - newWithdrawAmount;
        
        withdrawBalance.innerText= balance2;
       

})