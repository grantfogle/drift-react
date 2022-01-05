import React from "react";
import Main from "../src/components/main/Main";
import "./App.css";
import Map from "./components/map/Map";
import MapTwo from "./components/map/MapTwo";
import Authentication from './components/authentication/Authentication';
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
        <Routes>
          <Route path="/" element={<Authentication />}></Route>
          <Route path="/dashboard" element={<Main />}></Route>
          <Route path="/map" element={<Map />}></Route>
          <Route path="/mapTwo" element={<MapTwo />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
