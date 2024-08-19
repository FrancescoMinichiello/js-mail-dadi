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
// Lista di email autorizzate
const emailAutorizzate = [
    "test1@example.com",
    "user2@example.com",
    "admin@example.com",
    "guest@example.com"
];

// Funzione per controllare l'accesso
function controllaAccesso() {
    // Recuperare l'email inserita dall'utente
    const emailUtente = document.getElementById("emailUtente").value;

    // Variabile per tracciare se l'email è autorizzata
    let autorizzato = false;

    // Ciclo per controllare manualmente se l'email è nella lista
    for (let i = 0; i < emailAutorizzate.length; i++) {
        if (emailUtente === emailAutorizzate[i]) {
            autorizzato = true;
        }
    }

    // Stampare il risultato in pagina
    let resultElement = document.getElementById("result");
    if (autorizzato) {
        resultElement.innerHTML = "Accesso consentito. Benvenuto!";
    } else {
        resultElement.innerHTML = "Accesso negato. Email non autorizzata.";
    }
}

// Aggiungere un event listener al bottone per controllare l'accesso quando cliccato
document.getElementById("controllaEmail").addEventListener("click", controllaAccesso);

