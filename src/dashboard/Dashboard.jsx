import React, { useState, useContext } from 'react';
import { RiverContext } from '../context/RiverContext';
import Search from './search/Search';

import SearchForm from './search/SearchForm';
import RiverTable from './riverTable/RiverTable';
import RiverTableView from './riverTable/RiverTableView';
import RiverProvider from '../context/RiverContext';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const Dashboard = () => {
  const [value, setValue] = useState('explore');
  // rivers in iceland, british columbia, usa, new zealand, europe, etc.
  const { riverState, dispatch } = useContext(RiverContext);


  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    // dispatch({ type: 'SHOW_FAVORITES', })
  }

  return (
    <RiverProvider>
      <SearchForm />
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Tabs
          value={value}
          onChange={handleTabChange}
          aria-label='wrapped label tabs example'
        >
          <Tab value='explore' label='Explore' />
          <Tab value='favorites' label='Favorites' />
        </Tabs>
      </Box>
      <RiverTableView />
    </RiverProvider>
  );
};

export default Dashboard;
