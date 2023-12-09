document.getElementById('searchForm').addEventListener('submit', function (event) {



    const query = document.getElementById('query').value;
    const apiLink = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

    document.getElementById('results').innerHTML = '';


    fetch(apiLink)
        .then(response => response.json())
        .then(data => {
            data.forEach(series => {
                const article = document.createElement('article');
                const h2 = document.createElement('h2');
                const a = document.createElement('a');
                const img = document.createElement('img');
                const div = document.createElement('div');

                h2.textContent = series.show.name;
                a.href = series.show.url;
                a.textContent = 'More Details';
                a.target = '_blank';


                img.src = series.show.image?.medium || 'image-url.jpg';
                img.alt = series.show.name;

                div.innerHTML = series.show.summary || 'No summary available.';

                article.appendChild(h2);
                article.appendChild(a);
                article.appendChild(img);
                article.appendChild(div);

                document.getElementById('results').appendChild(article);
            });
        });

})