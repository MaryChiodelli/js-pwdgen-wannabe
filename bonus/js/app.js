// chiedi all’utente il suo nome
const userName = prompt('Qual\'è il tuo nome?');

// chiedi all’utente il suo cognome
const userSurname = prompt('Qual\'è il tuo cognome?');

// chiedi all’utente il suo colore preferito
const userColor = prompt('Qual\'è il tuo colore preferito?');

// genera un numero random che va da 1 a 100
const randomNumber = Math.floor( Math.random() * 100 ) + 1;

// scrivi sulla pagina nomecognomecolorepreferitonumerorandom
const title = document.getElementById('title');
title.innerHTML = userName + userSurname + userColor + randomNumber;