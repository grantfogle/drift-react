import React, { useState } from "react";
import Search from "./search/Search";
import SearchForm from "./search/SearchForm";
import RiverTable from "./riverTable/RiverTable";
import RiverTableView from "./riverTable/RiverTableView";
import RiverProvider from "../context/RiverContext";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const Dashboard = () => {
  const [value, setValue] = useState("one");
  // rivers in iceland, british columbia, usa, new zealand, europe, etc.

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <RiverProvider>
      <SearchForm />
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
        >
          <Tab value="one" label="Explore" />
          <Tab value="two" label="Favorites" />
        </Tabs>
      </Box>
      <RiverTableView />
    </RiverProvider>
    // search bar
    // view of current favorite rivers
    // river
    //
  );
};

export default Dashboard;
