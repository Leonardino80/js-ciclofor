// titolo del gioco
alert ('gioco di dadi per 2  giocatori');
// inizia il primo giocatore
alert ('giocatore 1 tira il dado');
var roll1 = Math.ceil(Math.random() * 6);
alert ('il suo tiro è ' + roll1);
// inizia il secondo giocatore
alert ('giocatore 2 tira il dado');
var roll2 = Math.ceil(Math.random() * 6);
alert ('il suo tiro è ' + roll2);

// confronto per vedere chi vince
if ( roll1 > roll2 )
{
  alert ('vince il giocatore 1');
}

// inserisco il caso particolare
else if ( roll2 === roll1 )
{
  alert ('pareggio');
}

else
{
  alert ('vince il giocatore 2');
}
