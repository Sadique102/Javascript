'use strict';

const year = parseInt(prompt('Enter a year.'));

if (year % 100 || year % 4 === 0 || year % 400 === 0) {
        document.querySelector('#p').innerHTML = `The year ${year} is a leap year.`;
    }

else {
    document.querySelector('#p').innerHTML = `The year ${year} is not a leap year.`;
}