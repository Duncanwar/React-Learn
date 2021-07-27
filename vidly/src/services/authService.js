import { apiEndpoint } from "../utils/config.json";
import http from "../utils/httpService";

const apiUrl = apiEndpoint + "/auth";

export function login(email, password) {
  return http.post(apiUrl, { email, password });
}
