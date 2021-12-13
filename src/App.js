import React from "react";
import Main from "./main/Main";
import Login from "./login/Login";
import "./App.css";
import Map from "./map/Map";
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
          <Route exact path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<Main />}></Route>
          <Route path="/map" element={<Map />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
