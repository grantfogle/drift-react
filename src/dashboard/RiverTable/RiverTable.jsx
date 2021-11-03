import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const RiverTable = () => {

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Upper Colorado River', 159, 4.0, 'Colorado River', 'CO'),
        createData('Ogden River', 237, 3.0, 'Green River', 'UT'),
        createData('Yellowstone River (Bozeman)', 262, 2.5, 'Madison River', 'MT'),
        createData('Eagle River (Red Cliff)', 305, 3.7, 'Colorado River', 'CO'),
        createData('Green River', 356, 4.2, 'Green River', 'UT'),
    ];
    return (
        <>
            <div className="river-table-nav"></div>
            <h3>River table works</h3>
            <Box sx={{

            }}>
                <TableContainer component={Paper}>
                    <Table sx={{ maxWidth: 900, margin: 'auto' }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>River Section</TableCell>
                                <TableCell align="right">Flow (cfs)</TableCell>
                                <TableCell align="right">Rating</TableCell>
                                <TableCell align="right">Watershed</TableCell>
                                <TableCell align="right">State</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
}

export default RiverTable;