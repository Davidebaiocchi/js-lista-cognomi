var email = prompt('Inserisci Email');
console.log(email);

// array
var emailConfermata = ['gino@gmail.com', 'luciano@gmail.com', 'luca@gmail.com', 'marco@gmail.com'];

// ciclo
for (var i = 0; i < emailConfermata.length; i++) {
    if (email === emailConfermata[i]) {
        document.getElementById('email').innerHTML = 'Email idona per l\'accesso';
    }
}



var surname = prompt('Inserisci cognome');
console.log(surname);

// array
var surnameList = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
surnameList.push(surname); //Come aggiungere all' array il cognome che inserirà l'utente

surnameList = surnameList.sort();

console.log(surnameList);
