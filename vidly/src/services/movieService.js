import config from "../utils/config.json";
import http from "../utils/httpService";

export function getMovies() {
  return http.get(config.apiEndpoint + "/movies");
}

export function deleteMovie(movieId) {
  return http.delete(config.apiEndpoint + "/" + movieId);
}
