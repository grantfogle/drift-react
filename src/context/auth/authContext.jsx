import { createContext, useState, useReducer } from 'react';
// import { AuthReducer } from './authReducer';

export const AuthContext = createContext();

const authState = {
    userAuthenticated: false,

};

const AuthProvider = ({ children }) => {
    // const [riverState, dispatch] = useReducer(riverStateReducer, riverDashboardState);
    // make api call here
    // river search
    // river search state

    return (
        <AuthContext.Provider value={{ authState, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;