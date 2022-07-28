import * as React from "react";
import { Autocomplete, TextField } from "@mui/material";
import "./AutoComplete.css";
import { search } from "../../rest/axios";
import CityWeather from "../CityWeather/CityWeather";

export default function AutoComplete() {
  const [options, setOptions] = React.useState([]);
  const [value, setValue] = React.useState();

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
      {value && <CityWeather choosenCity={value} />}
    </div>
  );
}
