import React from "react";
import Main from "../src/main/Main";
import "./App.css";
// import Map from "./map/Map";
import MapContainer from "./map";
import TopNavigation from "./topNavigation/TopNavigation";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <TopNavigation />
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route path="/map" element={<MapContainer />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
