'use strict';

const numberOfDiceRolls = parseInt(prompt('Enter a number of dice to roll.'))
let i = 0
let sum = 0

while (i <= numberOfDiceRolls) {
    const num = Math.floor(Math.random()*6)
    sum = sum + num
    i++
}

document.querySelector('#p').innerHTML = 'The sum of the dice rolls are: ' + sum.toString()

