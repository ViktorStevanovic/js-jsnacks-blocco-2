// Generatore di "nomi cognomi" casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da questi due array distinti vuole generare una falsa lista di invitati con nome e cognome.

const cognome = ['stevanovic','rossi','petrarca','caron','bortignon']
const nomi = ['viktor','marco','mirko','silvia','giuseppe']

let invitati = []

while (invitati.length < cognome.length){
    let listaCognomi = cognome[math.floor(math.random() )];

    let listaNomi = nomi[math.floor(math.random() )];

    let listaCompleta = listaCognomi + ' ' + listaNomi;

    invitati.push(listaCompleta)

    
}

