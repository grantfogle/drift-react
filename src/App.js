import React from "react";
import Main from "./components/main/Main";
import "./App.css";
// import Map from "./components/map/Map";
import MapBoxMap from "./components/map/mapbox/MapBox";
import { ProvideAuth } from "./use-auth.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ProvideAuth>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Main />}></Route>
            {/* <Route path="/map" element={<Map />}></Route> */}
            <Route path="/map" element={<MapBoxMap />}></Route>
          </Routes>
        </div>
      </Router>
    </ProvideAuth>
  );
}

export default App;
