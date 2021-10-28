import { API_BASE_URL, BASE_KEY_API } from "./config";
import queryString from 'query-string'

export function get(path, queryParams){
    const query = queryString.stringify(queryParams);
    return fetch(`${API_BASE_URL}${path}?${query}`, {
        headers: {
            Authorization: `Bearer ${BASE_KEY_API}`,
            Origin: 'localhost',
            withCredentials: true,
        }
    });
}