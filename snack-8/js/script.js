// Cliccando su un pulsante, viene avviato un cronometro. Per fermare il cronometro, bisogna cliccare su un secondo pulsante

const wrapperElement = document.querySelector('.wrapper')
const playButton = document.createElement('button')
const stopButton = document.createElement('button')
let timeDisplayer = document.createElement('p')
wrapperElement.appendChild(playButton)
wrapperElement.appendChild(timeDisplayer)
wrapperElement.appendChild(stopButton)
playButton.append('Start')
stopButton.append('Stop')
timeDisplayer.append(0)
let timer;

playButton.addEventListener('click', function(){
    timer = setInterval(function(){
       timeDisplayer.innerHTML++;
    }, 1000)
})

stopButton.addEventListener('click',function(){
    clearInterval(timer);
})