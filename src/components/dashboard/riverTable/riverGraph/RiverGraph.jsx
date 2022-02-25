import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
const dataSevenDays = [
    { name: '11/17/21', cfs: 1200 },
    { name: '11/18/21', cfs: 1100 },
    { name: '11/19/21', cfs: 1300 },
    { name: '11/20/21', cfs: 1240 },
    { name: '11/21/21', cfs: 1280 },
    { name: '11/22/21', cfs: 1282 },
    { name: '11/23/21', cfs: 1290 },
];

const dataThirtyDays = [
    { name: '11/17/21', cfs: 1200 },
    { name: '11/18/21', cfs: 1100 },
    { name: '11/19/21', cfs: 1300 },
    { name: '11/20/21', cfs: 1240 },
    { name: '11/21/21', cfs: 1280 },
    { name: '11/22/21', cfs: 1282 },
    { name: '11/23/21', cfs: 1290 },
    { name: '11/24/21', cfs: 1200 },
    { name: '11/25/21', cfs: 1100 },
    { name: '11/26/21', cfs: 1300 },
    { name: '11/27/21', cfs: 1240 },
    { name: '11/28/21', cfs: 1280 },
    { name: '11/29/21', cfs: 1282 },
    { name: '11/30/21', cfs: 1290 },
    { name: '11/31/21', cfs: 1200 },
    { name: '12/1/21', cfs: 1100 },
    { name: '12/2/21', cfs: 1100 },
    { name: '12/3/21', cfs: 1240 },
    { name: '12/4/21', cfs: 1280 },
    { name: '12/5/21', cfs: 1282 },
    { name: '12/6/21', cfs: 1290 },
    { name: '12/7/21', cfs: 1200 },
    { name: '12/8/21', cfs: 1200 },
    { name: '12/9/21', cfs: 1300 },
    { name: '12/10/21', cfs: 1240 },
    { name: '12/11/21', cfs: 1280 },
    { name: '12/12/21', cfs: 1282 },
    { name: '12/13/21', cfs: 1290 },
    { name: '12/14/21', cfs: 1282 },
    { name: '12/15/21', cfs: 1290 },

];


const RiverGraph = ({ riverId }) => {
    const [selectedChip, setSelectedChip] = useState(true);

    const handleDateChipClick = () => {
        setSelectedChip(!selectedChip);
    }

    const displayDateChips = () => {
        return selectedChip ? (
            <Stack direction="row" spacing={1}>
                <Chip label="7 day" />
                <Chip label="30 day" variant="outlined" onClick={handleDateChipClick} />
            </Stack>) : (
                <Stack direction="row" spacing={1}>
                    <Chip label="7 day" variant="outlined" onClick={handleDateChipClick} />
                    <Chip label="30 day" />
                </Stack >)
    }

    const displayFlowGraph = () => {
        return selectedChip ? (
            <LineChart data={dataSevenDays}>
                <Line type="monotone" dataKey="cfs" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        ) : (
                <LineChart data={dataThirtyDays}>
                    <Line type="monotone" dataKey="cfs" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
            )
    }

    return (
        <>
            <ResponsiveContainer width='100%' height={250}>
                {displayFlowGraph()}
            </ResponsiveContainer>
            <Box sx={{ width: '90%', margin: 'auto' }}>
                {displayDateChips()}
            </Box>
        </>
    );
}



export default RiverGraph;