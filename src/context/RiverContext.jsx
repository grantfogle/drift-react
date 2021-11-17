import { createContext, useState, useReducer } from 'react';
import { riverData, watershedData, userFavorited } from './riverData';
import { riverStateReducer } from './riverStateReducer';

export const RiverContext = createContext();

const riverDashboardState = {
    rivers: riverData,
    watershed: watershedData,
    displayRivers: riverData,
    showRiverTable: false,
    searchByRiver: '',
    searchByWatershed: '',
    userFavorites: userFavorited
};

const RiverProvider = ({ children }) => {
    const [riverState, dispatch] = useReducer(riverStateReducer, riverDashboardState);

    // make api call here
    // river search
    // river search state

    return (
        <RiverContext.Provider value={{ riverState, dispatch }}>
            {children}
        </RiverContext.Provider>
    )
}

export default RiverProvider;