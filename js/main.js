/*--------------------------
-----GIOCO DADI -----------*/

//console check
console.log('ok js');
// check element
const buttonEl = document.getElementById('start-game');
const textEl = document.getElementById('your-result');
// add element in liste
buttonEl.addEventListener('click' , function(){
    // add userchoiche
    const UserChoice = parseInt(Math.floor(Math.random() * 6) + 1);
    console.log(UserChoice);
    //add pcchoice
    const PcChoice = parseInt(Math.floor(Math.random() * 6) + 1);
    console.log(PcChoice);
    //standard message
    let response = 'Incredibile avete vinto entrambi ecco i vostri numeri: il tuo ' + UserChoice + ' il computer: ' + PcChoice;
    if(PcChoice < UserChoice){
        //if win user
        response = 'Cogratulazioni hai vinto!! Il tuo numero è: ' + UserChoice + ' rispetto a ' + PcChoice;
    }else if (PcChoice > UserChoice){
        //if win pc
        response = 'Mi dispiace ha vinto il computer , il suo numero è: ' + PcChoice + ' rispetto al tuo: ' + UserChoice;
    }
    //print on page
    textEl.innerText = response;
})
