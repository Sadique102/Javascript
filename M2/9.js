function even(numbersArray) {
    return numbersArray.filter(function(number) {
        return number % 2 === 0;
    });
}


const originalArray = [1, 2, 3, 4, 5, 6];
const evenNumbers = even(originalArray);

console.log(evenNumbers);