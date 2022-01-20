import React from "react";
import Main from "./components/main/Main";
import "./App.css";
import Map from "./components/map/Map";
import Authentication from "./components/authentication/Authentication";
import TopNavigation from "./components/topNavigation/TopNavigation";
import AuthProvider from "./context/RiverContext";
import { ProvideAuth } from "./use-auth.js";
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
    // <AuthProvider>
    <ProvideAuth>
      <Router>
        <div className="App">
          <Routes>
            {/* <Route path="/" element={<Authentication />}></Route> */}
            <Route path="/" element={<Main />}></Route>
            <Route path="/map" element={<Map />}></Route>
          </Routes>
        </div>
      </Router>
    </ProvideAuth>
  );
}

export default App;
