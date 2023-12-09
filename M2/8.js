'use strict';

const arrayOfStrings = ['One', 'Two', 'Three', 'Four']

function concat(arrayOfStrings) {
    let str = "";
    for (let i = 0; i < arrayOfStrings.length; i++) {
        str += arrayOfStrings[i]
        document.getElementById('text').innerText = str;
    }
}

concat(arrayOfStrings)
