import React, { useContext } from "react";
import { RiverContext } from "../../../context/RiverContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import RiverTableRow from "./RiverTableRow";

const RiverTableView = ({ isLoadingRivers }) => {
  const { riverState } = useContext(RiverContext);

  const displayTableGhostLoading = () => {
    if (isLoadingRivers) {
      return (
        <Box sx={{ width: "100%", height: 400 }}>
          <Skeleton sx={{ width: "90%", margin: "0 auto", height: 100 }} />
          <Skeleton sx={{ width: "90%", margin: "0 auto", height: 100 }} />
          <Skeleton sx={{ width: "90%", margin: "0 auto", height: 100 }} />
        </Box>
      );
    }
  };

  const noRiversToDisplay = () => {
    if (!isLoadingRivers) {
      return (
        <Box>
          <Typography variant="h4">
            There doesn't appear to be anything here
          </Typography>
          <Typography variant="body1">Please try another search</Typography>
        </Box>
      );
    }
  };

  const displayRiverTable = () => {
    if (riverState.displayRivers.length > 0) {
      return (
        <TableContainer
          component={Paper}
          sx={{ maxWidth: "1200px", margin: "auto" }}
        >
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
                // const { river } = riverData;
                for (let usgsId in riverData) {
                  return (
                    <RiverTableRow
                      key={usgsId}
                      favoriteStatus={riverData[usgsId.favorite]}
                      {...riverData[usgsId].river}
                    />
                  );
                }
              })}
            </TableBody>
          </Table>
        </TableContainer>
      );
    } else {
      return noRiversToDisplay();
    }
  };

  return (
    <>
      {displayTableGhostLoading()}
      {displayRiverTable()}
    </>
  );
};

export default RiverTableView;
