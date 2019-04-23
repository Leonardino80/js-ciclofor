// l'utente formula la richiesta
var  email_a = prompt('verifica se la tua mail è inserita');

// formazione database
var email_d = ['mail1', 'mail2', 'mail3', 'mail4'];

// ricerca database (si assume che nn c'è come variabile falsa)
var hasEmail = false;
for (var i = 0; i<email_d.length; i++) {
    if (email_d[i]===email_a){
 hasEmail = true;
break;}
}
if (hasEmail){
alert("email presente");
} else {
alert("email non presente");
}

// creato variabile (falsa) prima del ciclo per evitare una risposta ad ogni entry dell'array ed eseguire il ciclo una sola volta.
