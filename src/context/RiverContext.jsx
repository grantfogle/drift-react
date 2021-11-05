import { createContext, useState } from 'react';

export const RiverContext = createContext();

const RiverProvider = ({ children }) => {
    const [searchRiver, setSearchRiver] = useState('Colorado');
    // make api call here
    // river search
    // river search state

    return (
        <RiverContext.Provider value={{ searchRiver, setSearchRiver }}>
            {children}
        </RiverContext.Provider>
    )
}

export default RiverProvider;