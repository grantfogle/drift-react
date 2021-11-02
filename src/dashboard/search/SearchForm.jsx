import React from 'react';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';


const SearchForm = () => {
    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        stringify: (option) => option.state,
    });

    const states = [{ state: 'Colorado', state: 'Utah', state: 'Montana' }];


    return (
        <form>
            <input placeholder="River name" />
            <input placeholder="State" />

            <Autocomplete
                className=""
                options={states}
                filterOptions={filterOptions}
                renderInput={(params) => <TextField {...params} label="Custom filter" />}
            />;
        </form>
    );
}

export default SearchForm;