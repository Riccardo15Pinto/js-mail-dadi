/*--------------------------
----- EMAIL -----------*/
//check console
console.log('ok js');
//take element from DOM
const buttonElement = document.getElementById('check-email');
const textelement = document.getElementById('test-main');
// add array
let emailList = ['peppino@gmail.com', 'gennaro@hotmail.it', 'anselmo@libero.it']
console.log(emailList);
//add event listner
buttonElement.addEventListener('click' , function(){
    //take element from DOM
    const Userelement = document.getElementById('email-input').value;
    console.log(Userelement);
    //add message
    let messagge = 'Errore 404'
    //circole check
    for(let i = 0; i < emailList.length; i++ ){
        let emails = emailList[i];
        //check
        console.log(emails,Userelement.value )
        //condition if emails are different
        if(Userelement === emails){
            //message
            messagge = 'E-mail riconosciuta , siete autorizzati all`accesso';
        }
    }
    //print in page
    textelement.innerText = messagge;
})
