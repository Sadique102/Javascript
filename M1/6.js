'use strict';

const answer = confirm('Should I calculate the square root?')

if (answer === true) {
    const num = parseInt(prompt('Enter the number.'))
    if (num >= 0) {
        document.querySelector('#p').innerHTML = 'The square root of ' + num.toString() + ' is ' + Math.sqrt(num).toString()
    }
    else if (num < 0) {
        document.querySelector('#p').innerHTML = 'The square root of a negative number is not defined.'
    }

}

else if (answer === false){
    document.querySelector('#p').innerHTML = 'The square root is not calculated.'
}