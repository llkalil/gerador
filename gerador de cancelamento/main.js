document.querySelector('button').addEventListener('click',function (){

let txt = document.querySelector('input').value;
let rslt = document.querySelector('#resultado');
let outrmsg;
let random = Math.floor(Math.random() * 5);

switch(random) {
case 1:
    outrmsg = "ser mto chato(a)"
    break;
case 2:
    outrmsg = "ser interesseiro(a)"
    break;

case 3:
    outrmsg = "nao ter graça"
    break;

case 4:
    outrmsg = "ser muito lindo(a)"
    break;

default:
outrmsg = "nao ter sorte"
}

msg = txt + " sera cancelado(a) por " + outrmsg;

rslt.innerText= msg;

});