import { createContext, useState, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";

export const AuthContext = createContext();

const authInitialState = {
  user: "cats",
  token: ""
};

const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  // make api call here
  // river search
  // river search state

  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
