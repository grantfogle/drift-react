import React from 'react';
import Map from '../map/Map'
import TopNavigation from '../topNavigation/TopNavigation';
import './style.css';
import Dashboard from '../dashboard/Dashboard';
import RiverProvider from '../context/RiverContext';

const Main = () => {
    return (
        <RiverProvider>
            <div className='main'>
                <TopNavigation />
                <Dashboard />
                {/* <Map /> */}
            </div>
        </RiverProvider>
    );
};

export default Main;