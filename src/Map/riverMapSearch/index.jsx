import React, { useState, useContext } from "react";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { RiverContext } from "../../context/RiverContext";
import { SliderValueLabel } from "@mui/material";

const RiverMapSearch = () => {
  const [riverValue, setRiverValue] = useState("");
  const [watershedValue, setWatershedValue] = useState("");
  const rivContext = useContext(RiverContext);
  const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: option => option.label
  });

  const [isError, setIsError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
  };

  const states = [
    { label: "Colorado River", id: 1 },
    { label: "San Juan", id: 2 },
    { label: "South Platte", id: 3 }
  ];

  const rivers = [
    { label: "Colorado River" },
    { label: "Roaring Fork" },
    { label: "Eagle River" },
    { label: "Gore Creek" },
    { label: "Ogden River" },
    { label: "Yellowstone River" }
  ];

  return (
    <>
      <Box sx={{ paddingTop: "1em" }}>
        <div className="river-search">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={rivers}
            value={riverValue}
            onChange={(event, value) => {
              if (value === null) {
                value = "";
                setRiverValue("");
              }
              if (value.label) {
                rivContext.dispatch({
                  type: "RIVER_SELECT",
                  payload: { riverName: value.label }
                });
                setRiverValue(value.label);
                return;
              }
            }}
            sx={{ width: 450 }}
            renderInput={params => <TextField {...params} label="River" />}
          />
        </div>
      </Box>
    </>
  );
};

export default RiverMapSearch;
