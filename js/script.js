/*--------------------------
----- EMAIL -----------*/
//check console
console.log('ok js');
//take element from DOM
const buttonElement = document.getElementById('check-email');
const textelement = document.getElementById('test-main');
//add event listner
buttonElement.addEventListener('click' , function(){
    // add array
    let emailList = ['peppino@gmail.com', 'gennaro@hotmail.it', 'anselmo@libero.it']
    console.log(emailList);
    //take element from DOM
    const Userelement = document.getElementById('email-input').value;
    console.log(Userelement);
    //add message
    for(let i = 0; i < emailList.length; i++ ){
        let emails;
        emails = (emailList[i])
        let message;

        if(Userelement.value != emails){
            messagge = 'Erorre 404'
            console.log('carlo')
        }else if (Userelement === emails){
            messagge = 'E-mail riconosciuta , siete autorizzati all`accesso';
        }   
        textelement.innerText = messagge;
        
    }

})
