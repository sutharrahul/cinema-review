import axios from "axios";

/**
 * this function will show all movie by name
 * @param  search
 * @returns movie data by name
 */
function getSearchURL(search) {
  return `https://omdbapi.com/?s=${search}&apikey=${
    import.meta.env.VITE_API_KEY
  }`;
}
export async function movieSearchData(search) {
  const { data } = await axios.get(getSearchURL(search));
  return data;
}

/**
 * this function will return data of movie by Id or Title
 * @param movieId
 * @returns movieData
 */
function movieById(movieId) {
  return `https://www.omdbapi.com/?i=${movieId}}&apikey=${
    import.meta.env.VITE_API_KEY
  }`;
}
export async function movieData(movieId) {
  const { res } = await axios.get(movieById(movieId));
  return res;
}
