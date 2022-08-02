import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { getCityWeather } from "../../api/weather";
import "./CityWeather.css";

const CityWeather = ({ chosenCity, handleAddToFavourite }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getCityWeather(chosenCity.key).then(({ data }) => {
      setWeather(data);
    });
  }, [chosenCity]);

  return (
    <div key={chosenCity.key} className="wrap-weather">
      {weather && [
        <h3>{weather.weatherText}</h3>,
        <span>{weather.temperature.metric.value}</span>,
        <Button onClick={()=>handleAddToFavourite(chosenCity)}>Add To Favorite List</Button>,
      ]}
    </div>
  );
};

export default CityWeather;
