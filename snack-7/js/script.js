// Chiedo all'utente un numero e genero attraverso una funzione un numero di quadrati equivalente al numero inserito dall'utente nel DOM, in qualsiasi forma. 

const userNumber = parseInt(prompt('Type a number'))

function implementSquare (){
    for(i = 0; i < userNumber; i++){

        const wrapperElement = document.querySelector('.wrapper')
        const divElement = document.createElement('div')
        divElement.classList.add('square-item')
        wrapperElement.appendChild(divElement)
    }

    
}

implementSquare()