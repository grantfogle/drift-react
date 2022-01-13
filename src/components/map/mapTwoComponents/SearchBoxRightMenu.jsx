import React from "react";
import Box from "@material-ui/core/Box";
// import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const SearchBoxRightMenu = () => {
  const rivers = [
    { label: "Colorado River" },
    { label: "Roaring Fork" },
    { label: "Eagle River" },
    { label: "Gore Creek" },
    { label: "Ogden River" },
    { label: "Yellowstone River" }
  ];
  return (
    <Box sx={{ height: 40, width: 200, display: "flex" }}>
      {/* <Autocomplete
        freeSolo
        id="map-search-box"
        disableClearable
        options={rivers.map(option => option.label)}
        renderInput={params => <TextField {...params} label="freeSolo" />}
      /> */}
    </Box>
  );
};

export default SearchBoxRightMenu;
