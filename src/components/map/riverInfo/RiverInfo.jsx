import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';

const riverInfoStyle = {
    width: '100%',
    height: '100px',
    backgroundColor: '#red',
    zIndex: 1,
    position: 'absolute',
    top: 200,
    left: 0,
}

const RiverInfo = () => {
    return (
        <Fragment style={riverInfoStyle}>
            <Grid container columns={{ xs: 4, md: 12 }}>
                <Grid item xs={2}>CATs</Grid>
            </Grid>
        </Fragment>
    );
};

export default RiverInfo;