import React from 'react';
import Search from './search/Search';
import SearchForm from './search/SearchForm';
import RiverTable from './RiverTable/RiverTable';

const Dashboard = () => {
    return (
        <>
            <h2>Search rivers</h2>
            {/* <Search /> */}
            <SearchForm />
            <RiverTable />
        </>
        // search bar
        // view of current favorite rivers
        // river
        // 
    );
}

export default Dashboard;