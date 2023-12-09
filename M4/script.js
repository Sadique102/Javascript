document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the default form submission action

    var query = document.getElementById('query').value;
    var xhr = new XMLHttpRequest(); // Creates a new XMLHttpRequest object

    xhr.open('GET', 'https://api.tvmaze.com/search/shows?q=' + encodeURIComponent(query), true);

    xhr.onload = function() {
        if (this.status === 200) {
            var results = JSON.parse(this.responseText);
            console.log(results); // Logs the results to the console
        } else {
            console.error('Error fetching data');
        }
    };

    xhr.onerror = function() {
        console.error('Request error...');
    };

    xhr.send(); // Sends the request
});
