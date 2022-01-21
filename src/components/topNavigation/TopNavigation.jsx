import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import SettingsSubNav from "./settings/SettingsSubNav";
import WaterIcon from '@mui/icons-material/Water';
import "./TopNavigation.css";
import { Link } from "react-router-dom";

const TopNavigation = () => {
  return (
    <>
      <AppBar position="static" style={{ background: '#3498db' }}>
        <Toolbar variant="dense" className="menu">
          <Link to="/" style={{ textDecoration: 'none', color: '#fff' }} >
            <Typography variant='h5'
            ><WaterIcon />Drift
            </Typography>
          </Link>
          <Box sx={{ display: 'flex' }}>
            <Button>
              <Link to="/map" style={{ textDecoration: 'none', color: '#fff' }} ><Typography>Map</Typography></Link>
            </Button>
            <SettingsSubNav />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopNavigation;
