/* Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */

// Creo array vuoti
var arr1 = [];
var arr2 = [];

// Attraverso la funzione inserisco num elementi random ai due array
aggiungiElementi(arr1);

do {
    aggiungiElementi(arr2);
} while (arr1.length == arr2.length)


console.log(`Primo array: ${arr1}`);
console.log(`Secondo array: ${arr2}`);

// Prompt con inserimento elemento digitato nell'array con minor num di elementi
while (arr1.length != arr2.length) {
    var oggetto = prompt('Inserisci un elemento');

    if (arr1.length < arr2.length) {
        arr1.push(oggetto);
    } else {
        arr2.push(oggetto);
    }

}

// Visualizzo array con messaggio finale
console.log(`Primo array: ${arr1}`);
console.log(`Secondo array: ${arr2}`);
alert('I due array hanno lo stesso numero di elementi');


// - Funzioni
// Genero numero random e pusho nell'array tanti elementi quanti ne indica il num random
function aggiungiElementi (arr) {
    var rndm = parseInt(Math.random()* (10 - 1) + 1);
    for (var i = 0; i < rndm; i++) {
        var obj = 'Elemento ';
        arr.push(obj + i)
    }
    /* console.log(rndm); */
    return arr;
}