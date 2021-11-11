import { createContext, useState, useReducer } from 'react';
import { riverData } from './riverData';
import { riverStateReducer } from './riverStateReducer';

export const RiverContext = createContext();

const riverDashboardState = [{
    rivers: riverData,
    displayRivers: [],
    showRiverTable: false,
    searchRiverStr: ''
}];


const RiverProvider = ({ children }) => {
    // const [searchRiver, setSearchRiver] = useState('');
    // const [searchState, setSearchState] = useState('');
    // const [displayRivers, setDisplayRivers] = useState('');
    const [searchState, dispatch] = useReducer(riverStateReducer, riverDashboardState);

    // make api call here
    // river search
    // river search state

    return (
        <RiverContext.Provider value={{ riverDashboardState }}>
            {children}
        </RiverContext.Provider>
    )
}

export default RiverProvider;