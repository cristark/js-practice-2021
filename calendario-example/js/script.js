/* Il calendario mediocre
Scrivi un programma che dato:
Il numero di giorni nel mese
Il giorno della settimana in cui questo comincia (0: lunedì ... 6: domenica)
  Stampi il calendario di un mese. */

// Variabile generale con giorni settimana
var giorni = ['lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato', 'domenica'];

// Prompt con controllo numero giorni settimana
do {
    var numGiorni = parseInt(prompt('Inserisci i giorni del mese'));
} while (numGiorni <= 0 || numGiorni > 31);

// Prompt con controllo giorno inizio settimana
do {
    var inizioSettimana = parseInt(prompt('Inserisci il giorno di inizio della settimana: da 0 - lunedì a 6 -domenica'));
} while (inizioSettimana < 0 || inizioSettimana > 6);

// Visualizzo risultati
console.log(numGiorni);
console.log(giorni[inizioSettimana]);

// Ciclo per incrementare giorni della settimana
var sentinella = true
var j = inizioSettimana;
var k = 0;
while (sentinella) {
    console.log(k + 1, giorni[j]);
    j++;
    k++;

    // Ciclo if per far ripartire i giorni della settimana una volta raggiunta la domenica
    if (j == 7) {
        j = 0; 
    }
    
    // Ciclo if per bloccare while prinicipale al raggiungimento del num di giorni inseriti dall'utente
    if (k == numGiorni) {
        sentinella = false;
    }
    
}
