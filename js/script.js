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

surname = surname.charAt(0).toUpperCase() + surname.slice(1);

// array
var surnameList = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
surnameList.push(surname); //Come aggiungere all' array il cognome che inserirà l'utente
surnameList = surnameList.sort();

// ciclo
for (var i = 0; i < surnameList.length; i++) {
    if (surname === surnameList[i]) {
        console.log(surname + ' è in posizione: ' + (i + 1));
    }
}
console.log(surnameList);
