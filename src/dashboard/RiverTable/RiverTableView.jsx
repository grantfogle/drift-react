import React, { useContext } from "react";
import { RiverContext } from "../../context/RiverContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RiverTableRow from './RiverTableRow';

const RiverTableView = () => {
  const { riverState } = useContext(RiverContext);
  return (
    <>
      <TableContainer component={Paper} sx={{ width: "90%", margin: "auto" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Favorite</TableCell>
              <TableCell align="left">River</TableCell>
              <TableCell align="left">Current Flow (cfs)</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Watershed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {riverState.displayRivers.map(riverData => {
              return <RiverTableRow key={riverData.id} {...riverData} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default RiverTableView;
