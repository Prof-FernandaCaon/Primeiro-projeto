let nomeUsuário="";
let elemento=document.querySelector("#nome-usuário");
elemento.textContent=nomeUsuário;

while(nomeUsuário==""){nomeUsuário=prompt("Qual é o seu nome?");}

if(nomeUsuário==null){elemento.textContent="e seja muito bem-vindo"}
else{elemento.textContent=nomeUsuário;}

