// chiedi all’utente il suo nome
const userName = prompt('Qual\'è il tuo nome?');
console.log(userName);

// chiedi all’utente il suo cognome
const userSurname = prompt('Qual\'è il tuo cognome?');
console.log(userSurname);

// chiedi all’utente il suo colore preferito
const userColor = prompt('Qual\'è il tuo colore preferito?');
console.log(userColor);

// scrivi sulla pagina nomecognomecolorepreferito21
const title = document.getElementById('title');
title.innerHTML = userName + userSurname + userColor + 21;