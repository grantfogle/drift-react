import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const TopNavigation = () => {
    return (
        <Fragment>
            <AppBar
                position='static'>
                <Toolbar variant="dense">
                    <Typography>
                        Drift
                    </Typography>
                </Toolbar>
            </AppBar>
        </Fragment>
    );
};

export default TopNavigation;