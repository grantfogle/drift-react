import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import LayersIcon from "@mui/icons-material/Layers";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import CreateIcon from "@mui/icons-material/Create";

const BottomNav = () => {
  const [value, setValue] = useState("filters");

  const handleBottomNavChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <BottomNavigation showLabels value={value} onChange={handleBottomNavChange}>
      <BottomNavigationAction
        label="Filters"
        value="filters"
        icon={<FilterAltIcon />}
      />
      <BottomNavigationAction
        label="Layers"
        value="layers"
        icon={<LayersIcon />}
      />
      <BottomNavigationAction
        label="Tools"
        value="tools"
        icon={<CreateIcon />}
      />
      <BottomNavigationAction
        label="Account"
        value="account"
        icon={<AccountCircleIcon />}
      />
    </BottomNavigation>
  );
};

export default BottomNav;
