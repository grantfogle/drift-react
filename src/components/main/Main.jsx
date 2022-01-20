import React, { useContext, useEffect } from "react";
import Map from "../map/Map";
import "./style.css";

import TopNavigation from "../topNavigation/TopNavigation";
import Dashboard from "../dashboard/Dashboard";
import RiverProvider, { RiverContext } from "../../context/RiverContext";
import { useAuth } from "../../use-auth";
import Authentication from "../authentication/Authentication";

const Main = () => {
  const auth = useAuth();

  // how to re render object on value change

  const displayMainComponent = () => {
    return auth.user ? (
      <>
        <TopNavigation />
        <div className="main">
          <Dashboard />
        </div>
      </>
    ) : (
      <Authentication />
    );
  };

  return (
    <>
      <RiverProvider>{displayMainComponent()}</RiverProvider>
    </>
  );
};

export default Main;
