import axios from 'axios';

const API_KEY = '6f9b19b15f3c5c8b640c0f23cff316d8';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);   // axios returns a promise, it doesn't contain our data
  console.log('Request:', request);

  return {
    // always an action needs to have a type
    type: FETCH_WEATHER,   // Keep it consistant between here and the reducers
    // If the payload is a promise, redux-promises stops the action
    // and when the data is ready, it unwraps the promise
    payload: request
  }
}
