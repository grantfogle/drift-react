import React from 'react';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';


const SearchForm = () => {
    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        stringify: (option) => option.state,
    });

    const states = [
        { label: 'Colorado' },
        { label: 'Utah' },
        { label: 'Montana' }
    ];

    const rivers = [
        { label: 'Colorado River' },
        { label: 'Green River' },
        { label: 'Bitterroot River' },
        { label: 'Eagle River' },
        { label: 'Ogden River' },
        { label: 'Yellowstone River' }
    ];


    return (
        <div className="river-search">
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={rivers}
                sx={{ width: 450 }}
                renderInput={(params) => <TextField {...params} label="River" />}
            />
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={states}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />
        </div>
    );
}

export default SearchForm;