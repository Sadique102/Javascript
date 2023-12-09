 function findLeapYears() {
            // Get the start and end years from the user
            var startYear = parseInt(document.getElementById("startYear").value);
            var endYear = parseInt(document.getElementById("endYear").value);

            // Validate input
            if (isNaN(startYear) || isNaN(endYear) || startYear > endYear) {
                alert("Please enter valid start and end years.");
                return;
            }

            // Find leap years in the interval
            var leapYears = [];
            for (var year = startYear; year <= endYear; year++) {
                if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                    leapYears.push(year);
                }
            }

            // Display the leap years in an unordered list on the HTML document
            var leapYearsList = document.getElementById("leapYearsList");
            leapYearsList.innerHTML = ""; // Clear previous results

            for (var i = 0; i < leapYears.length; i++) {
                var listItem = document.createElement("li");
                listItem.appendChild(document.createTextNode(leapYears[i]));
                leapYearsList.appendChild(listItem);
            }
        }