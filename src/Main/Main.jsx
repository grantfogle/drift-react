import React from 'react';
import Map from '../Map';
import TopNavigation from '../TopNavigation/TopNavigation';
import './style.css';
import Dashboard from '../dashboard/Dashboard';

const Main = () => {
    return (
        <div className='main'>
            <TopNavigation />
            <Dashboard />
            {/* <Map /> */}
        </div>
    );
};

export default Main;