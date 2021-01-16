/* Write a JavaScript function that reverse a number. */

alert(`Il numero invertito è: ${numberReverse()}`);


function numberReverse() {
    
    var number = parseInt(prompt('Inserisci un numero'));
    var convNum = number.toString();
    var reverse = '';
    
    for (var i = convNum.length - 1; i >= 0; --i) {
    
        reverse += convNum[i];
    }
    return reverse
};
