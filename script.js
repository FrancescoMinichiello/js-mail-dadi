//Esercizio 1

const giocatore = Math.floor(Math.random() * 6) + 1;
const computer = Math.floor(Math.random() * 6) + 1;

// Stabilire il vincitore
let risultato;
if (giocatore > computer) {
    risultato = "Il giocatore vince!";
} else if (giocatore < computer) {
    risultato = "Il computer vince!";
} else {
    risultato = "È un pareggio!";
}

// Stampare i risultati in pagina
document.getElementById("risultato").innerHTML = `Il giocatore ha tirato: ${giocatore}<br>Il computer ha tirato: ${computer}<br>${risultato}`;





//Esercizio 2

