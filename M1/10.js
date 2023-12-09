 var numDice = prompt("Enter the number of dice:");

    if (numDice !== null && !isNaN(numDice) && numDice > 0) {

        var targetSum = prompt("Enter the target sum of the eye numbers:");


        if (targetSum !== null && !isNaN(targetSum)) {

            var numOutcomes = Math.pow(6, numDice);

            var numSuccessfulOutcomes = 0;

            for (var i = 1; i <= 6; i++) {
                for (var j = 1; j <= 6; j++) {
                    for (var k = 1; k <= 6; k++) {
                        // Check if the sum matches the target sum
                        if (i + j + k === parseInt(targetSum)) {
                            numSuccessfulOutcomes++;
                        }
                    }
                }
            }


            var probability = (numSuccessfulOutcomes / numOutcomes) * 100;

            // Display the result
            document.write("<p>Probability of getting a sum of " + targetSum + " with " + numDice + " dice is: " + probability.toFixed(2) + "%</p>");
        } else {
            document.write("<p>Invalid target sum. Please enter a valid number.</p>");
        }
    } else {
        document.write("<p>Invalid number of dice. Please enter a valid number greater than 0.</p>");
    }