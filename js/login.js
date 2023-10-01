
// step -1 add click event handler with the submit button
document.getElementById('btn-submit').addEventListener( 'click',function(){
    //step2: get the email address inside the email input field
    //always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email')
    const email= emailField.value;
    // step -3 get password
    // set id on the element , get the element , get the value from the element
    const passwordField = document.getElementById('give-password')
    const password = passwordField.value;
    
    // DANGER : DON'T VERIFY EMAIL PASSWORD ON THE CLIENT SIDE
    // STEP 4 - verify email and password
    if(email=== 'puja' && password== '123456789'){
        window.location.href='bank.html'

}
else
{
    alert('kuttar baccha pass mone kor')
}
})
