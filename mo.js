// Movie data (You can replace it with your own movie data)
const movies = [
    {
        title: 'Starsan: The Shouting Star Of The Jungle',
        posterUrl: 'starsan.jpg',
        youtubeUrl: 'https://youtu.be/jiU6k28aqQs'
    },
    {
        title: 'ASIONG SALONGA: HARI NG TONDO 1950 | Full Movie | Action w/ Jeorge Estregan',
        posterUrl: 'asi.jpg',
        youtubeUrl: 'https://youtu.be/e6rGiDpwW38'
    },
    {
        title: 'FPJ Ang Probinsyano 1997',
        posterUrl: 'fpj.jpg',
        youtubeUrl: 'https://youtu.be/orZmE_h9n80'
    },
    
];

// Function to search for a movie
function searchMovie() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    const posterContainer = document.getElementById('posterContainer');

    // Clear previous search results
    posterContainer.innerHTML = '';

    // Find movies matching the search term
    const matchedMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm)
    );

    // Display matched movie posters
    matchedMovies.forEach(movie => {
        const moviePoster = document.createElement('div');
        moviePoster.classList.add('moviePoster');

        const posterImg = document.createElement('img');
        posterImg.src = movie.posterUrl;
        posterImg.alt = movie.title;
        moviePoster.appendChild(posterImg);

        const movieTitle = document.createElement('div');
        movieTitle.classList.add('movieTitle');
        movieTitle.textContent = movie.title;
        moviePoster.appendChild(movieTitle);

        const youtubeLink = document.createElement('a');
        youtubeLink.href = movie.youtubeUrl;
        youtubeLink.textContent = 'Watch on YouTube';
        moviePoster.appendChild(youtubeLink);

        posterContainer.appendChild(moviePoster);
    });

    // Clear the search input
    searchInput.value = '';
}