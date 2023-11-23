// Cliccando su un pulsante, viene avviato un cronometro. Per fermare il cronometro, bisogna cliccare su un secondo pulsante

const wrapperElement = document.querySelector('.wrapper')
const playButton = document.createElement('button')
const timeDisplayer = document.createElement('p')
wrapperElement.appendChild(playButton)
wrapperElement.appendChild(timeDisplayer)
playButton.append('Start')

let timer = 0
timeDisplayer.append(timer)

playButton.addEventListener('click', function(){
    setInterval()
})

