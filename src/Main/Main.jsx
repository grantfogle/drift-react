import React, { useContext } from "react";
import Map from "../map/Map";
import TopNavigation from "../topNavigation/TopNavigation";
import "./style.css";
import Dashboard from "../dashboard/Dashboard";
import RiverProvider, { RiverContext } from "../context/RiverContext";

const Main = () => {
  const rivContent = useContext(RiverContext);
  console.log("hiiiiit", rivContent);
  return (
    <RiverProvider>
      <div className="main">
        <TopNavigation />
        <Dashboard />
        {/* <Map /> */}
      </div>
    </RiverProvider>
  );
};

export default Main;
