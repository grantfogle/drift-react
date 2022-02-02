import { createContext, useState, useReducer, useEffect } from "react";
import { riverData, watershedData, userFavorited } from "./riverData";
import { riverStateReducer } from "../reducers/riverStateReducer";

export const RiverContext = createContext();

const riverDashboardState = {
  rivers: riverData,
  watershed: watershedData,
  displayRivers: [],
  showRiverTable: false,
  searchByRiver: "",
  searchByWatershed: "",
  userFavorites: userFavorited
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
