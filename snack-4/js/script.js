// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

function wordsComparator (firstWord, secondWord){
    
    if (firstWord.length == secondWord.length){
        console.log(firstWord, secondWord)
    } else if(firstWord.length < secondWord.length){
        console.log(secondWord)
    } else if (firstWord.length > secondWord.length){
        console.log(firstWord)
    } else{ }

    return comparator
}
let wordLength = wordsComparator (firstWord = prompt('Type first word'),secondWord = prompt('Type second word'))