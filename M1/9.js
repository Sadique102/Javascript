 var inputNumber = prompt("Enter an integer:");

    // Check if the input is not null and is a valid integer
    if (inputNumber !== null && inputNumber !== "") {
        var number = parseInt(inputNumber);

        // Check if the input is a valid integer
        if (!isNaN(number) && Number.isInteger(number) && number > 1) {
            var isPrime = true;

            // Check if the number is prime
            for (var i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) {
                    isPrime = false;
                    break;
                }
            }

            // Display the result
            if (isPrime) {
                document.write("<p>" + number + " is a prime number.</p>");
            } else {
                document.write("<p>" + number + " is not a prime number.</p>");
            }
        } else {
            document.write("<p>Invalid input. Please enter a valid integer greater than 1.</p>");
        }
    } else {
        document.write("<p>No input provided. Please enter an integer.</p>");
    }