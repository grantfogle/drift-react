import React, { useContext } from "react";
import Map from "../map/Map";
import TopNavigation from "../topNavigation/TopNavigation";
import "./style.css";
import Dashboard from "../dashboard/Dashboard";
import RiverProvider, { RiverContext } from "../../context/RiverContext";

const Main = () => {
  return (
    <RiverProvider>
      <TopNavigation />
      <div className="main">
        <Dashboard />
      </div>
    </RiverProvider>
  );
};

export default Main;
