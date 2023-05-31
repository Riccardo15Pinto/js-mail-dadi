/*--------------------------
----- EMAIL -----------*/
//check console
console.log('ok js');
//take element from DOM
const buttonElement = document.getElementById('check-email');
const textelement = document.getElementById('test-main');
// add array
let emailList = ['peppin@gmail.com', 'gennaro@hotmail.it', 'anselmo@libero.it']
buttonElement.addEventListener('click' , function(){

    const Userelement = document.getElementById('email-input').value;
    console.log(Userelement);
})
