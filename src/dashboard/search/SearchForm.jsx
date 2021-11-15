import React, { useState, useContext } from "react";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { RiverContext } from "../../context/RiverContext";

const SearchForm = () => {
  // const {searchRiver, setSearchRiver} = useContext(RiverContext);
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
    { label: "Colorado", id: 1 },
    { label: "Utah", id: 2 },
    { label: "Montana", id: 3 }
  ];

  const rivers = [
    { label: "Colorado River" },
    { label: "Green River" },
    { label: "Bitterroot River" },
    { label: "Eagle River" },
    { label: "Ogden River" },
    { label: "Yellowstone River" }
  ];

  return (
    <>
      <h2>Search rivers</h2>
      <div className="river-search">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={rivers}
          sx={{ width: 450 }}
          renderInput={params => <TextField {...params} label="River" />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={states}
          sx={{ width: 300 }}
          renderInput={params => <TextField {...params} label="Watershed" />}
        />
      </div>
    </>
  );
};

export default SearchForm;
