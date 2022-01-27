import React, { useState, useContext } from "react";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { RiverContext } from "../../../context/RiverContext";
import { SliderValueLabel } from "@mui/material";
import { riversFilterList, watershedFilterList } from "./data/filters";
import "./SearchForm.css";

const SearchForm = () => {
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

  const FetchRiversAction = () => {
    console.log("fetchRiversAction");
    // make call to db via axios
    // add promise hooks
    // handle fail state
    // dispatch to state
  };

  const FetchWatershedAction = () => {
    console.log("fetchWatershedAction");
    // make call to db via axios
    // add promise hooks
    // handle fail state
    // dispatch to state
  };

  return (
    <>
      <Box sx={{ paddingTop: "1em" }}>
        <div className="river-search">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={riversFilterList}
            value={riverValue}
            onChange={(event, value) => {
              if (value === null) {
                value = "";
                setRiverValue("");
                rivContext.dispatch({
                  type: "RIVERS_RESET",
                  payload: { watershedFilter: watershedValue }
                });
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
            sx={{ width: 300 }}
            renderInput={params => <TextField {...params} label="River" />}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={watershedFilterList}
            value={watershedValue}
            onChange={(event, value) => {
              if (value === null) {
                value = "";
                setRiverValue("");
              }
              if (value.label) {
                rivContext.dispatch({
                  type: "WATERSHED_SELECT",
                  payload: { watershed: value.label }
                });
                setWatershedValue(value.label);
                return;
              }
            }}
            sx={{ width: 300 }}
            renderInput={params => <TextField {...params} label="Watershed" />}
          />
        </div>
      </Box>
    </>
  );
};

export default SearchForm;
