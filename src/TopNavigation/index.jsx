import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';

const styles = {
    topNav: {
        height: 60,
        backgroundColor: '#74b9ff'
    }
}

const TopNavigation = () => {
    return (
        <Fragment>
            <AppBar position='static' className={styles.topNav}>
                asdfasfd
                {/* <Toolbar>asdfasdf</Toolbar> */}
            </AppBar>
        </Fragment>
    );
};

export default TopNavigation;