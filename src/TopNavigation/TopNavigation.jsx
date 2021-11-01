import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SettingsSubNav from './settings/SettingsSubNav';
import './TopNavigation.css';

const TopNavigation = () => {
    return (
        <Fragment>
            <AppBar
                position="static">
                <Toolbar variant="dense" className="menu">
                    <Typography>Drift</Typography>
                    <div className="right-menu">
                        <Button color="white">Map</Button>
                        <Button>River Info</Button>
                        <SettingsSubNav />
                    </div>
                </Toolbar>
            </AppBar>
        </Fragment>
    );
};

export default TopNavigation;