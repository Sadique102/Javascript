document.getElementById('searchForm').addEventListener('submit'), function (event) {
    event.preventDefault();
}

    const query = document.getElementById('query').value;
    const apiLink = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

    fetch(apiLink)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
