import React from "react";
import Main from "../src/main/Main";
import "./App.css";
import Map from "./map/Map";
import Authentication from './authentication/Authentication';
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
        <Routes>
          <Route path="/" element={<Authentication />}></Route>
          <Route path="/dashboard" element={<Main />}></Route>
          <Route path="/map" element={<Map />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
