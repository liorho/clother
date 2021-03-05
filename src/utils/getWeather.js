import axios from 'axios';
import { WEATHER_URL } from '../consts';
import { WEATHER_API_KEY, WEATHER_API_HOST } from '@env';

export const getWeather = async (lat, lon) => {
  try {
    const {
      data: {
        name: location,
        main: { temp: tempInK },
        weather: [{ main: description }],
      },
    } = await axios({
      method: 'GET',
      url: `${WEATHER_URL}`,
      params: {
        lat,
        lon,
      },
      headers: {
        'x-rapidapi-key': WEATHER_API_KEY,
        'x-rapidapi-host': WEATHER_API_HOST,
      },
    });
    return { location, tempInK, description };
  } catch (e) {
    return { weatherErrorMsg: e };
  }
};
