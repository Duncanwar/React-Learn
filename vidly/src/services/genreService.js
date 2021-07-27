import config from "../utils/config.json";
import http from "../utils/httpService";

export async function getGenres() {
  return http.get(`${config.apiEndpoint}/genres`);
}
