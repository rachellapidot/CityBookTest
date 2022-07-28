import * as React from "react";
import { getCityWeather } from "../../rest/axios";

export default function CityWeather(props) {
  const [weather, setWeather] = React.useState(null);

  React.useEffect(() => {
    getCityWeather(props.choosenCity.key).then(({ data }) => {
      setWeather(data);
    });
  }, [props.choosenCity]);

  return (
    <div key={props.choosenCity.key} className="wrap-weather">
      {weather && [
        <h3>{weather.weatherText}</h3>,
        <span>{weather.temperature.metric.value}</span>,
      ]}
    </div>
  );
}
