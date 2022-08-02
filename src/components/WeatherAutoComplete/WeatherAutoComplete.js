import { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import "./WeatherAutoComplete.css";
import { search } from "../../api/weather";
import CityWeather from "../CityWeather/CityWeather";

const WeatherAutoComplete = ({ addFavourite }) => {
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState();

  const onInputChange = (event, string) => {
    if (event.type === "change") {
      if (string.length > 2) {
        search(string).then((res) => {
          setOptions(
            res.data.map((item) => {
              return {
                label: item.localizedName,
                key: item.key,
              };
            })
          );
        });
      }
    }
  };

  return (
    <div className="wrapper">
      <Autocomplete
        clearOnBlur={false}
        sx={{ width: 300 }}
        options={options}
        onInputChange={onInputChange}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label="Search For City..." />
        )}
      />
      {value && (
        <CityWeather handleAddToFavourite={addFavourite} chosenCity={value} />
      )}
    </div>
  );
};

export default WeatherAutoComplete;
