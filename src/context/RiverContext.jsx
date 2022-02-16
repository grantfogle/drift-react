import { createContext, useState, useReducer, useEffect } from "react";
import { riverData, watershedData, userFavorited } from "./riverData";
import { riverStateReducer } from "../reducers/riverStateReducer";

export const RiverContext = createContext();

const riverDashboardState = {
  allRivers: [],
  displayRivers: [],
  userFavorites: []
};

const RiverProvider = ({ children }) => {
  const [riverState, dispatch] = useReducer(
    riverStateReducer,
    riverDashboardState
  );

  return (
    <RiverContext.Provider value={{ riverState, dispatch }}>
      {children}
    </RiverContext.Provider>
  );
};

export default RiverProvider;
