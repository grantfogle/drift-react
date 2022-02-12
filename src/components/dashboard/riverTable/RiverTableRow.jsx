import React, { useState, useContext, useEffect } from "react";
import { RiverContext } from "../../../context/RiverContext";
import RiverAlert from "./riverAlert/RiverAlert";
import RiverGraph from "./riverGraph/RiverGraph";
import FavoritesService from "../../../services/favorites.service";

import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

// import Stack from "@mui/material/Stack";
// import Chip from "@mui/material/Chip";

const RiverTableRow = ({ favorite, riverData }) => {
  const {
    usgsId,
    name,
    geoTag,
    state,
    watershed,
    currentCFS,
    warmWater,
    lowWater,
    highWater,
    iced
  } = riverData;

  const { riverState, dispatch } = useContext(RiverContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [favorite, setFavorite] = useState(false);

  // useEffect(() => {
  //   if (riverState.userFavorites.includes(usgsId)) {
  //     setFavorite(true);
  //   }
  // });

  const displayDropdown = () => {
    if (showDropdown) {
      return (
        <TableRow sx={{ width: "100%", height: "200px" }}>
          {/* <Box sx={{ height: '100%', width: '100%' }}> */}
          <TableCell colSpan={5}>
            <Box>
              <RiverGraph />
            </Box>
          </TableCell>
          {/* </Box> */}
        </TableRow>
      );
    }
  };

  const displayUpDownArrow = () => {
    return showDropdown ? <KeyboardArrowLeftIcon /> : <KeyboardArrowDownIcon />;
  };

  const displayFavoriteStatus = () => {
    return favorite ? (
      <StarIcon
        sx={{ color: "#f1c40f" }}
        onClick={() => {
          // ( ) need to get user id
          FavoritesService.deleteFavorite(2, usgsId).then(res => {
            setFavorite(false);
            dispatch({ type: "REMOVE_FROM_FAVORITES", payload: { usgsId } });
          });
        }}
      />
    ) : (
      <StarOutlineIcon
        // ( ) need to get user id
        onClick={() => {
          FavoritesService.addFavorite(2, usgsId).then(res => {
            console.log("bing", res);
            setFavorite(true);
            dispatch({ type: "ADD_TO_FAVORITES", payload: { usgsId } });
          });
        }}
      />
    );
  };

  //   const displayRiverAlerts = () => {
  // warmWater,
  // lowWater,
  // highWater,
  // iced
  //     const alertArr = [
  //       { warmWater, color: "info" },
  //       { lowWater, color: "info" },
  //       { highWater, color: "info" },
  //       { iced, color: "info" }
  //     ];
  //     const alertStack = alertArr.map(alert => {
  //       console.log(alert);
  //       if (alert) {
  //         return <RiverAlert key={alert} alert={alert} />;
  //       }
  //     });
  //     return (
  //       <Stack direction="row" spacing={1}>
  //         {alertStack}
  //       </Stack>
  //     );
  //   };

  return (
    <>
      <TableRow key={usgsId}>
        <TableCell>{displayFavoriteStatus()}</TableCell>
        <TableCell>
          {/*on click send to map*/}
          {name} {geoTag}
        </TableCell>
        <TableCell>{currentCFS}</TableCell>
        {/*show alerts on river status in pretty format, high h20, etc*/}
        <TableCell>{/* {displayRiverAlerts()} */}</TableCell>
        <TableCell
          onClick={e =>
            showDropdown ? setShowDropdown(false) : setShowDropdown(true)
          }
        >
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            variant="body2"
          >
            {watershed} {displayUpDownArrow()}
          </Typography>
        </TableCell>
      </TableRow>
      {displayDropdown()}
    </>
  );
};

export default RiverTableRow;
