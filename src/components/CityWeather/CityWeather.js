import * as React from "react";
import { getCityWeather } from "../../rest/axios";
import "./CityWeather.css";

export default function CityWeather(props) {
  const [weather, setWeather] = React.useState(null);

  React.useEffect(() => {
    getCityWeather(props.chosenCity.key).then(({ data }) => {
      setWeather(data);
    });
  }, [props.chosenCity]);

  return (
    <div key={props.chosenCity.key} className="wrap-weather">
      {weather && [
        <h3>{weather.weatherText}</h3>,
        <span>{weather.temperature.metric.value}</span>,
      ]}
    </div>
  );
}
