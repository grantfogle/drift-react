import React, { useState, useContext, useEffect } from 'react';
import { RiverContext } from '../../../context/RiverContext';
import RiverAlert from './riverAlert/RiverAlert';

import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';


const RiverTableRow = (riverData) => {
    const { id, geoTag, currentFlowCFS, alerts, watershed, river } = riverData;

    const { riverState, dispatch } = useContext(RiverContext);
    const [showDropdown, setShowDropdown] = useState(false);
    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        if (riverState.userFavorites.includes(id)) {
            setFavorite(true);
        }
    }, []);

    const displayDropdown = () => {
        if (showDropdown) {
            return (
                <TableRow>
                    <Box>stuff will go here</Box>
                </TableRow>
            )
        }
    }

    const displayUpDownArrow = () => {
        return showDropdown ? <KeyboardArrowLeftIcon /> : <KeyboardArrowDownIcon />;
    }

    const displayFavoriteStatus = () => {
        return favorite ?
            <StarIcon sx={{ color: '#f1c40f' }} onClick={() => {
                setFavorite(false);
                dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: { id } });
            }}
            /> :
            <StarOutlineIcon onClick={() => {
                setFavorite(true);
                dispatch({ type: 'ADD_TO_FAVORITES', payload: { id } });
            }} />;
    }

    const displayRiverAlerts = () => {
        const alertStack = alerts.map(alert => {
            return <RiverAlert key={alert} alert={alert} />
        });
        return (
            <Stack direction='row' spacing={1}>
                {alertStack}
            </Stack>
        );
    }

    return (
        <>
            <TableRow key={id} >
                <TableCell>
                    {displayFavoriteStatus()}
                </TableCell>
                <TableCell>
                    {/*on click send to map*/}
                    {river} ({geoTag})
                      </TableCell>
                <TableCell>{currentFlowCFS}</TableCell>
                {/*show alerts on river status in pretty format, high h20, etc*/}
                <TableCell>{displayRiverAlerts()}</TableCell>
                <TableCell
                    onClick={(e) => showDropdown ? setShowDropdown(false) : setShowDropdown(true)}
                >
                    <Typography sx={{ display: 'flex', alignItems: 'center' }} variant='body2'>{watershed} {displayUpDownArrow()}</Typography>
                </TableCell>
            </TableRow >
            {displayDropdown()}
        </>
    );
}

export default RiverTableRow;