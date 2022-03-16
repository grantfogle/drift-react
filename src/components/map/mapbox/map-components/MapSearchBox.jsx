import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {riversFilterList} from '../../../dashboard/search/data/filters'

export default function MapBoxSearch() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={riversFilterList}
      sx={{ width: 300, backgroundColor: '#fff' }}
      renderInput={(params) => <TextField {...params} label="River" />}
    />
  );
}