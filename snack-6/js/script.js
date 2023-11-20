// Crea una funzione che accetta due elementi del dom, uno e' il parent e l'altro e' un elemento che voglio sia aggiunto al parent come figlio.

function addDomElement (firstElement, secondElement){

    let wrapper = document.querySelector('.wrapper')
    
    let parentElement = document.createElement(firstElement)
    let sonElement = document.createElement(secondElement)
    wrapper.appendChild(parentElement)
    parentElement.appendChild(sonElement)
}

addDomElement('div', 'p')