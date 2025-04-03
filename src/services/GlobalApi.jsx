import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const apiKey = import.meta.env.VITE_TMDB_API_KEY;

const getTrending = axios.get(movieBaseUrl + "/trending/all/day?api_key=" + apiKey);

export default {
    getTrending,
}