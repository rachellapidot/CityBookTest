import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import WeatherAutoComplete from "./components/WeatherAutoComplete/WeatherAutoComplete.js";
import { addToFavorites, getFavorites } from "./api/weather.js";

const App = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavorites().then((result) => {
      setFavorites(result.data);
    });
  }, []);

  const addFavorite = (favorite) => {
    if (
      favorites.findIndex((f) => f.cityKey === parseInt(favorite.key)) === -1
    ) {
      setFavorites((oldState) => [...oldState, favorite]);

      addToFavorites(favorite);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <StarIcon />
            {favorites.length}
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Weather Application
          </Typography>
        </Toolbar>
      </AppBar>
      <WeatherAutoComplete addFavourite={addFavorite}></WeatherAutoComplete>
    </Box>
  );
};

export default App;
