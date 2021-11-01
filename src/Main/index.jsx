import React, { Fragment } from 'react';
import Map from '../Map';
import TopNavigation from '../TopNavigation/TopNavigation';
import './style.css';

const Main = () => {
    return (
        <div className='main'>
            <TopNavigation />
            <Map />
        </div>
    );
};

export default Main;