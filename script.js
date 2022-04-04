var timer = 60;
var timerelem = document.querySelector('#timerelem');
var hitelem = document.querySelector('#hitelem');
var scoreelem = document.querySelector('#scoreelem');
var btmpanel = document.querySelector('#btmpanel');

var  guesNum;
var score = 0;



setInterval(function () {
    if (timer > 0) {
        --timer;
        timerelem.textContent = timer;
    }
    else {
        btmpanel.innerHTML='<h1 id="center">Game Over<h1>'
    }
}, 1000);

function makebubbles() {
    for (var i = 0; i < 144; i++ ) {
        var ranNUm = Math.floor(Math.random() * 10);
        var template = `<div class="bubble">${ranNUm}</div>`;
        btmpanel.innerHTML += template;
    }
}




function getNewGuess() {
    //get a random num
    guesNum = Math.floor(Math.random() * 10);
    hitelem.textContent = guesNum;
    
}

btmpanel.addEventListener('click', function (details) {
    var clickedBblvalue = details.target.textContent;
    if (clickedBblvalue == guesNum) {
        score = score + 10;
        scoreelem.textContent = score;
        getNewGuess();
        btmpanel.innerHTML = '';
        makebubbles();
    }
    else {
        console.log("bhosdlike sahi number click kar");
    }
 })
getNewGuess();
makebubbles();