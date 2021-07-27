import { apiEndpoint } from "../utils/config.json";
import http from "../utils/httpService";

const apiUrl = apiEndpoint + "/users";

export function register(user) {
  return http.post(apiUrl, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
