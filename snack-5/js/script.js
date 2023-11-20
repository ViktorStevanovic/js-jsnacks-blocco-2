// Crea una funzione che accetta due numeri, se il primo e' divisibile per il secondo, allora ritorna vero, altrimenti ritorna falso.
const userFirstNumber = parseInt(prompt('Type a number'))
const userSecondNumber = parseInt(prompt('Type another number'))

function comparator (firstNumber, secondNumber){
    if (firstNumber % secondNumber === 0){
        return true;
    } else {
        return false
    }
}

let result = comparator (userFirstNumber, userSecondNumber)
console.log(result)