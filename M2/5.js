'use strict';

let nums = [];

while (true) {
    let num = parseInt(prompt('Enter a number. Enter previously entered number to exit.'));
    if (nums.includes(num)) {
        alert('Number is already been given.');
        break;
    }

    else {
        nums.push(num);
    }
}

nums.sort()

let i = 0;

while (i < nums.length) {
    console.log(nums[i]);
    i++;
}