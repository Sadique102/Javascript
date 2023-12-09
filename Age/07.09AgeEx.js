function tellAge() {
    // Read value of yearOfBirth from the input field

//var a =  window.prompt("Enter your name:")

var yearOfBirth = document.getElementById("yearOfBirth").value;
    // Figure out the current date into today variable

var today = new Date();
    // Use getFullYear() method to get the current year out from the today variable
   var year = today.getFullYear();

    // Calculate the (rough estimate of the) age
    var age = year - yearOfBirth;
    // If age is less than zero
 if (age < 0) {
     document.getElementById("answer").innerHTML = "The given year of birth is more than the current  year."

 } else {
    document.getElementById("answer").innerHTML = "You are now "+age+" years old. <br> (Current year is "+year+".)"
   var year = document.getElementById("yearOfBirth").value;

            // Check if the year is a leap year
            var isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

            // Display the result on the HTML document
            var resultElement = document.getElementById("result");
            if (isLeapYear) {
                resultElement.innerHTML = "Your birth year is a leap year!";
            } else {
                resultElement.innerHTML = "Your birth year is not a leap year.";
            }

 }

        //  Show an error message

    // otherwise tell the age

}



