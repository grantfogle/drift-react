import React, { useState, useContext, useEffect } from 'react';
import { RiverContext } from "../../context/RiverContext";


import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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
                    <TableCell>stuff will go here</TableCell>
                </TableRow>
            )
        }
    }

    const displayUpDownArrow = () => {
        return showDropdown ? <KeyboardArrowLeftIcon /> : <KeyboardArrowDownIcon />;
    }

    const displayFavoriteArrow = () => {
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
        // alert for high h20
        // alert for muddy h20
        // alert for frozen
        // alert for warm water
        // alert for low flows
        // <Stack direction="row" spacing={1}>
        //     <Chip icon={<FaceIcon />} label="With Icon" />
        //     <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />
        // </Stack>
        const alertStack = alerts.map(alert => {
            switch(alert) {
                case 'off color': 
                    return <Chip icon={<FaceIcon />} label="With Icon" />
                    break;
            }
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
                    {/*on click save river to users favorites*/}
                    {displayFavoriteArrow()}
                </TableCell>
                <TableCell>
                    {/*on click send to map*/}
                    {river} ({geoTag})
                      </TableCell>
                <TableCell>{currentFlowCFS}</TableCell>
                {/*show alerts on river status in pretty format, high h20, etc*/}
                <TableCell>{displayRiverAlerts()}</TableCell>
                <TableCell onClick={(e) => {
                    return showDropdown ? setShowDropdown(false) : setShowDropdown(true);
                }}>
                    {/*on dropdown show graph of recent river info*/}
                    {/*on click of text go to map*/}
                    {watershed} {displayUpDownArrow()}
                </TableCell>
            </TableRow >
            {displayDropdown()}
        </>
    );
}

export default RiverTableRow;