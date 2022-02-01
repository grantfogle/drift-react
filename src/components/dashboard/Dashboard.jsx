import React, { useState, useContext, useEffect } from "react";
import { RiverContext } from "../../context/RiverContext";

import SearchForm from "./search/SearchForm";
import RiverTableView from "./riverTable/RiverTableView";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const Dashboard = () => {
  const [value, setValue] = useState("explore");
  // rivers in iceland, british columbia, usa, new zealand, europe, etc.
  const { riverState, dispatch } = useContext(RiverContext);
  // const = useContext()

  useEffect(() => {
    getTopRivers();
    console.log("cats 2");
  }, []);

  const getTopRivers = () => {
    const topRiversUrl = "http://localhost:8080/api/top-rivers";

    fetch(topRiversUrl)
      .then(response => {
        return response.json();
      })
      .then(rivers => {
        if (rivers.length > 0) {
          dispatch({ type: "GET_TOP_RIVERS", topRivers: rivers });
        }
        return rivers;
      });
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === "favorites") {
      dispatch({ type: "SHOW_FAVORITES" });
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
      <RiverTableView />
    </>
  );
};

export default Dashboard;
