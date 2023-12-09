'use strict';

let nums = []

for (let i = 0; i < 5; i++) {
    const num = parseInt(prompt('Enter a number.'))
    nums.push(num)
}

for (let i = nums.length; i >= 0; i--) {
    console.log(nums[i])
}