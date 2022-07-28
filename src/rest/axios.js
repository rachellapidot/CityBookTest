import axios from "axios";

const baseUrl = "https://localhost:7143/WeatherForecast/";

export const search = (query) => {
  return axios.get(baseUrl, {
    params: {
      query,
    },
  });
};

export const getCityWeather = (key) => {
  return axios.get(baseUrl + "currentWeather/", {
    params: {
      cityKey: key,
    },
  });
};
