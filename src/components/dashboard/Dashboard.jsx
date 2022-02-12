import React, { useState, useContext, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { RiverContext } from "../../context/RiverContext";
import RiversService from "../../services/rivers.service";
import FavoritesService from "../../services/favorites.service";
import SearchForm from "./search/SearchForm";
import RiverTableView from "./riverTable/RiverTableView";

const Dashboard = ({ userId }) => {
  const [value, setValue] = useState("explore");
  const [isLoadingRivers, setIsLoadingRivers] = useState(false);
  const { riverState, dispatch } = useContext(RiverContext);

  useEffect(() => {
    getTopRivers();
    // getUserFavorites();
  }, []);

  useEffect(() => {
    if (value === "favorites") {
      getUserFavorites();
    }
  }, [value]);

  const getTopRivers = async () => {
    setIsLoadingRivers(true);
    await RiversService.getTopRivers().then(res => {
      setIsLoadingRivers(false);
      dispatch({ type: "GET_RIVERS", payload: { rivers: res } });
    });
  };

  const getUserFavorites = async () => {
    await FavoritesService.getUserFavorites(userId).then(res => {
      console.log(res);
      // dispatch({ type: "SHOW_FAVORITES", favorites: res });
    });
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === "favorites") {
      if (riverState.userFavorites.length === 0) {
        const userFavoritesUrl = "http://localhost:8080/api/users-favorites/1";
        setIsLoadingRivers(true);
        fetch(userFavoritesUrl)
          .then(response => {
            response.json();
          })
          .then(userFavorites => {
            console.log(userFavorites);
            if (userFavorites.length > 0) {
              dispatch({ type: "SHOW_FAVORITES", favorites: userFavorites });
              setIsLoadingRivers(false);
            }
          });
      }
    } else {
      dispatch({ type: "SHOW_EXPLORE" });
    }
  };

  return (
    <>
      <Box>
        <SearchForm />
      </Box>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Tabs
          value={value}
          onChange={handleTabChange}
          aria-label="wrapped label tabs example"
        >
          <Tab value="explore" label="Explore" />
          <Tab value="favorites" label="Favorites" />
        </Tabs>
      </Box>
      <RiverTableView isLoadingRivers={isLoadingRivers} />
    </>
  );
};

export default Dashboard;
