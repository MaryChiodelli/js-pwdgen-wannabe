// chiedi all’utente il suo nome
const userName = prompt('Qual\'è il tuo nome?');

// chiedi all’utente il suo cognome
const userSurname = prompt('Qual\'è il tuo cognome?');

// chiedi all’utente il suo colore preferito
const userColor = prompt('Qual\'è il tuo colore preferito?');

// scrivi sulla pagina nomecognomecolorepreferito21
const title = document.getElementById('title');
title.innerHTML = userName + userSurname + userColor + 21;