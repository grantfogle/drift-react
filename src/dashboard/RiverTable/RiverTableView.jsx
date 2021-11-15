import React, { useContext } from "react";
import { RiverContext } from "../../context/RiverContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const RiverTableView = () => {
  const rivContext = useContext(RiverContext);
  console.log(rivContext.riverState[0].rivers);
  return (
    <>
      <TableContainer component={Paper} sx={{ width: "800px", margin: "auto" }}>
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
            {rivContext.riverState[0].rivers.map(riverData => {
              const {
                id,
                state,
                river,
                watershed,
                geoTag,
                currentFlowCFS,
                alerts
              } = riverData;
              return (
                <TableRow key={id}>
                  <TableCell>
                    {/*on click save river to users favorites*/}
                    <StarOutlineIcon />
                  </TableCell>
                  <TableCell>
                    {/*on click send to map*/}
                    {river} ({geoTag})
                  </TableCell>
                  <TableCell>{currentFlowCFS}</TableCell>
                  {/*show alerts on river status in pretty format, high h20, etc*/}
                  <TableCell>{alerts}</TableCell>
                  <TableCell>
                    {/*on dropdown show graph of recent river info*/}
                    {/*on click of text go to map*/}
                    {watershed} <KeyboardArrowDownIcon />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default RiverTableView;
