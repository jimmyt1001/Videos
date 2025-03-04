const API_KEY = "959abdd48829846ab50fde66890a48ef";
const BASE_URL = "https://api.themoviedb.org/3";

// Function to fetch and get popular movies
export const getPopularMovies = async () => {
  // Fetching popular movies from TMDb API
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  
  // Check if the response is OK (status code is in the range 200-299)
  if (!response.ok) {
    throw new Error('Failed to fetch popular movies');
  }

  // Parsing the JSON response
  const data = await response.json();

  // Sort the results alphabetically by title
  const sortedResults = data.results.sort((a, b) => {
    if (a.title < b.title) return -1; // a comes before b
    if (a.title > b.title) return 1;  // a comes after b
    return 0; // a and b are equal
  });

  // Return the sorted results
  return sortedResults;
};

// Function to search for movies based on a query
export const searchMovies = async (query) => {
  // Fetching movies based on the search query
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );

  // Check if the response is OK
  if (!response.ok) {
    throw new Error('Failed to fetch movies for the given query');
  }

  // Parsing the JSON response
  const data = await response.json();

  // Return the search results
  return data.results;
};