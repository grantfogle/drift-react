import React, { useState, useContext } from "react";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { SliderValueLabel } from "@mui/material";
import { riversFilterList, watershedFilterList } from "./data/filters";
import "./SearchForm.css";
import RiversService from "../../../services/rivers.service";
import { RiverContext } from "../../../context/RiverContext";

const SearchForm = ({ searchRivers }) => {
  const [riverValue, setRiverValue] = useState(null);
  const [watershedValue, setWatershedValue] = useState(null);
  const { riverState, dispatch } = useContext(RiverContext);

  const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: option => option.label
  });

  const [isError, setIsError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
  };

  const sendRiverSearch = async riverStr => {
    let riverStrLC = riverStr.toLowerCase();
    if (watershedValue) {
      let filteredWatershedArr = riverState.displayRivers.filter(river => {
        return river.name === riverStrLC;
      });
      dispatch({ type: "GET_RIVERS", rivers: filteredWatershedArr });
    } else {
      await RiversService.searchRivers(riverStrLC).then(res => {
        console.log(res);
        dispatch({ type: "GET_RIVERS", rivers: res });
      });
    }
  };

  const sendWatershedSearch = async watershedStr => {
    setRiverValue("");
    const watershedStrLC = watershedStr.toLowerCase();
    await RiversService.searchWatershed(watershedStrLC).then(res => {
      console.log(res);
      dispatch({ type: "GET_RIVERS", rivers: res });
    });
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
                // rivContext.dispatch({
                //   type: "RIVERS_RESET",
                //   payload: { watershedFilter: watershedValue }
                // });
              }
              if (value.label) {
                // rivContext.dispatch({
                //   type: "RIVER_SELECT",
                //   payload: { riverName: value.label }
                // });
                setRiverValue(value.label);
                sendRiverSearch(value.label);
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
                // rivContext.dispatch({
                //   type: "WATERSHED_SELECT",
                //   payload: { watershed: value.label }
                // });
                setWatershedValue(value.label);
                sendWatershedSearch(value.label);
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
