'use strict';

function diceRoll() {
    let num = Math.floor(Math.random() * 7)
    while (num < 6) {
        num = Math.floor(Math.random() * 7)
        document.getElementById('list').innerHTML += `<li>${num}</li>`;
    }
}

diceRoll()