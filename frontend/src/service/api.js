// const API_KEY = "9a6dd838"
const BASE_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=9a6dd838"

export const getPopularMovies = async() =>{
    const response = await fetch(`${BASE_URL}/movie/popular?api_key = {API_KEY}`);
    const data  = await response.json()
    return data.results
}

export const searchMovies = async (query) => {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
      )}`
    );
    const data = await response.json();
    return data.results;
  };