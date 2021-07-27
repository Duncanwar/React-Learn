import { apiEndpoint } from "../utils/config.json";
import http from "../utils/httpService";

const apiUrl = apiEndpoint + "/movies";

function movieUrl(id) {
  return `${apiUrl}/${id}`;
}

export function getMovies() {
  return http.get(apiUrl);
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}

export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }
  return http.post(apiUrl, movie);
}
