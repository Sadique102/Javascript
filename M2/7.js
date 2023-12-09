'use strict';

const diceSides = parseInt(prompt('Enter how sides the dice has.'))

function diceRoll(sides) {
    let num = Math.floor(Math.random() * sides + 1)
    while (num < sides) {
        num = Math.floor(Math.random() * sides + 1)
        document.getElementById('list').innerHTML += `<li>${num}</li>`;
    }
}

diceRoll(diceSides)