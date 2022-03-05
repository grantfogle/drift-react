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
    setIsLoadingRivers(true);
    getUserFavorites();
    getTopRivers();
  }, []);

  useEffect(() => {
    if (value === "favorites") {
      dispatch({ type: "SHOW_FAVORITES" });
    } else {
      dispatch({ type: "SHOW_EXPLORE" });
    }
  }, [value]);

  const getTopRivers = async () => {
    await RiversService.getTopRivers().then(res => {
      setIsLoadingRivers(false);
      dispatch({ type: "GET_RIVERS", rivers: res });
    });
  };

  const getUserFavorites = async () => {
    await FavoritesService.getUserFavorites(userId).then(res => {
      dispatch({ type: "SET_FAVORITES", payload: { rivers: res } });
    });
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
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
