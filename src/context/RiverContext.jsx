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

  // useEffect(() => {
  // fetch rivers
  // fetch(process.env. + "/api/rivers")
  //   .then(rivers => {
  //     console.log(rivers.json());
  //     return rivers.json();
  //   })
  //   .then(data => {
  //     console.log(data);
  //   });
  // }, []);
  // make api call here
  // river search
  // river search state

  return (
    <RiverContext.Provider value={{ riverState, dispatch }}>
      {children}
    </RiverContext.Provider>
  );
};

export default RiverProvider;
