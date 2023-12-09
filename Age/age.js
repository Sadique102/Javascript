       function calculateAge() {
         var birthYear = document.getElementById('birthYear').value;
         var birthMonth = document.getElementById('birthMonth').value;
         var birthDay = document.getElementById('birthDay').value;

         var currentDate = new Date();
         var currentYear = currentDate.getFullYear();
         var currentMonth = currentDate.getMonth() + 1; // Months are zero-based
         var currentDay = currentDate.getDate();

         var age = currentYear - birthYear;

         // Adjust age if birthday hasn't occurred yet this year
         if (currentMonth < birthMonth ||
             (currentMonth === birthMonth && currentDay < birthDay)) {
           age--;
         }

         var ageWithMonthAndDay = age + " years, " + (currentMonth - birthMonth) + " months and " + (currentDay - birthDay) + " days.";
         if (age < 0) {
           document.getElementById("result").innerHTML = "The given year of birth is more than the current  year."

         } else {
           document.getElementById('result').innerHTML = "Your age is: " + ageWithMonthAndDay;

         }

}