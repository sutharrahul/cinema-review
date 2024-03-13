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
  try {
    const axiosResponse = await axios.get(getSearchURL(search));
    console.log(axiosResponse);
    /**
     *  axios return network call response (it call axiosResponse)
     *  axios response contains headres, config, data, status, status code etc.
     *  among them data is actual API reponse
     */
    const response = axiosResponse.data;
    /**
     * Extract the data from axiosResponse
     */
    if (response?.Response === "True") {
      return response;
    }
    throw new Error(response?.Error);
  } catch (error) {
    console.error(error.message);
    return {
      errorMessage: error.message || "Somthing went wrong...!",
      Search: [],
    };
  }
}

/**
 * this function will return data of movie by Id or Title
 * @param movieId
 * @returns movieData
 */
function movieById(movieId) {
  return `https://www.omdbapi.com/?i=${movieId}&apikey=${
    import.meta.env.VITE_API_KEY
  }`;
}

export async function movieDataById(movieId) {
  try {
    const { data } = await axios.get(movieById(movieId));
    if (data?.Response === "True") {
      return data;
    }
    throw new Error(data?.Error);
  } catch (error) {
    console.error(error.message);
    return {
      errorMessage: error.message || "Somthing went wrong...!",
      data: [],
    };
  }
}
