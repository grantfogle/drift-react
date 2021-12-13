import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SettingsSubNav from "./settings/SettingsSubNav";
import "./TopNavigation.css";
import { Link } from "react-router-dom";

const TopNavigation = () => {
  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar variant="dense" className="menu">
          <Typography>Drift</Typography>
          <div className="right-menu">
            <Button sx={{ border: "1px solid white", borderRadius: "5px" }}>
              <Link to="/dashboard">Dashboard</Link>
            </Button>
            <Button>
              <Link to="/map">Map</Link>
            </Button>
            <SettingsSubNav />
          </div>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default TopNavigation;
