import React, { useState, useContext } from "react";
import { RiverContext } from "../../../context/RiverContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import WavesIcon from "@mui/icons-material/Waves";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const RiverTable = () => {
  //     const {  river s } = useContext(RiverContext);
  //     const displayRowId, setDisplayRow] = useState(0);
  //     function createData(id, name, calories, fat, carbs, protein) {
  //         return { id, name, calories, fat, carbs, protein };
  //     }
  //     const displayDropdown = (rowId) => {
  //         if (rowId !== displayRowId) {
  //             setDisplayRow(rowId);
  //             return;
  //         }
  //         setDisplayRow(0);
  //     }
  //     const displayRiverTableRow = (rowId) => {
  //         if (rowId === displayRowId) {
  //             return (
  //                 <TableRow>
  //                     <div>
  //                         Dogs
  //                     </div>
  //                 </TableRow>
  //             );
  //     const rows = [
  //         createData(1, 'Upper Colorado River', 159, 4.0, 'Colorado River', 'CO'),
  //         createData(2, 'Ogden River', 237, 3.0, 'Green River', 'UT'),
  //         createData(3, 'Yellowstone River (Bozeman)', 262, 2.5, 'Madison River', 'MT'),
  //         ta(4, 'Eagle River (Red Cliff)', 305, 3.7, 'Colorado River', 'CO'),
  //         , 'Green River', 356, 4.2, 'Green River', 'UT'),
  //                 t={Paper}>
  //                     h: 1200, mar n: 'auto' }} aria-label="simple table">
  //                             <TableRow>
  //                                 ll>River Section</TableCell>
  //                                 ll align="right">Flow (cfs) <WavesIcon /></TableCell>
  //                                 ll align="right">Rating</TableCell>
  //                                 ll align="right">Watershed</TableCell>
  //                                 lign="right">State</TableCell>
  //                             </TableRow>
  //                             p((r o w) => (
  //                                             <>
  //                                                 <TableRow
  //                                                     key={row.name}
  //                                                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  //                                                 >
  //                                                 <TableCell component="th" scope="row">
  //                                                 <StarOutlineIcon />
  //                                                                 {r ow.name}
  //                                             </TableCell>
  //                                                     <TableCell align="right">{row.carbs}</TableCell>
  //                                                     <TableCell onClick={() => displayDropdown(row.id)} align="right">{row.protein} <ArrowDropDownIcon /></TableCell>
  //                                                 </TableRow>
  //                                                 {displayRiverTableRow(row.id)}
  //                                             </>
  //                                             ))} */}
  //                 </TableContainer>
  //             </Box>
  //         </>
  //     );
  // }
};

// export default RiverTable;
