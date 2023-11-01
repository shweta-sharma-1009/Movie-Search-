const searchInput = document.getElementById('searchInput');
const moviesContainer = document.getElementById('movies');
const paginationContainer = document.getElementById('pagination');

let currentPage = 1;
let totalResults = 0;

const API_KEY = 'e94faa5f'; 
const BASE_URL = 'https://www.omdbapi.com/';
// https://www.omdbapi.com/?&apikey=e94faa5f&s=Batman&page=2

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const fetchMovies = async (searchTerm, page) => {
  const response = await fetch(`${BASE_URL}?&apikey=${API_KEY}&s=${searchTerm}&page=${page}`);
// const response = await fetch('https://www.omdbapi.com/?&apikey=e94faa5f&s=Batman&page=2')
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
};

const di