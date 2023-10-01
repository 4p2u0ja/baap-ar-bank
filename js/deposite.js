// step-1 add event listener to the deposite button
document.getElementById('btn-deposite').addEventListener('click',function(){
// step-2 get the deposite amount from the deposite input field 
//for input field use .value to get the value inside the input field
const depositeField= document.getElementById('deposite-field');
const depositeAmountString = depositeField.value ;
//string ta k number e convert kore nite hibe 
const newDepositeAmount = parseInt(depositeAmountString);

// step - 3 get the current deposite total
//for non-input (element other than input . textarea) use innerText to get the text
const depositTotalElement = document.getElementById('deposite-total');
const depositTotalstring = depositTotalElement.innerText;
//string ta k number e convert kore nite hibe 
const newDepositeTotal= parseInt(depositTotalstring);

// step 4-  deposite box e add kora 
const newAmount =newDepositeAmount+newDepositeTotal;
// deposite e ar number change
depositTotalElement.innerText=newAmount;
// step - 5 get current total in balance
const balance = document.getElementById('balance-total');
const balanceString = balance.innerText;
const newBalance = parseFloat(balanceString);
const addBalance = newBalance + newDepositeAmount;
balance.innerText = addBalance;

//  step - 7 :input field khali kora 
depositeField.value="";
// depositTotalElement.innerText= '';
})