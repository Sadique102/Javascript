'use strict';

let nums = [];

while (true) {
    const num = parseInt(prompt('Enter a number. Press 0 to exit.'));
    if (num === 0) {
        break;
    }
    else {
        nums.push(num);
    }
}

nums.sort();
nums.reverse();

let i = 0;

while (i < nums.length) {
    console.log(nums[i]);
    i++;
}