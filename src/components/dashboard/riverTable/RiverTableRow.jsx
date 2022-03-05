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

import Stack from "@mui/material/Stack";

const RiverTableRow = ({ favoriteStatus, riverData }) => {
  const {
    name,
    geoTag,
    state,
    watershed,
    currentCFS,
    usgsId,
    warmWater,
    lowWater,
    highWater,
    iced
  } = riverData;

  const { riverState, dispatch } = useContext(RiverContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    if (favoriteStatus) {
      setFavorite(true);
    }
  }, []);

  const favoriteRiver = () => {
    FavoritesService.addFavorite(2, usgsId).then(res => {
      setFavorite(true);
      dispatch({
        type: "ADD_TO_FAVORITES",
        riverData
      });
    });
  }
  const unfavoriteRiver = () => {
  //   FavoritesService.deleteFavorite(2, usgsId).then(res => {
  //     setFavorite(false);
  //     dispatch({ type: "REMOVE_FROM_FAVORITES", payload: { usgsId } });
  //   });
  // }}
    dispatch({
      type: "REMOVE_FROM_FAVORITES",
      riverData
    });
    // Favore
  }

  const displayDropdown = () => {
    if (showDropdown) {
      return (
        <TableRow sx={{ width: "100%", height: "200px" }}>
          <TableCell colSpan={5}>
            <Box>
              <RiverGraph />
            </Box>
          </TableCell>
        </TableRow>
      );
    }
  };

  const displayUpDownArrow = () => {
    return showDropdown ? <KeyboardArrowLeftIcon /> : <KeyboardArrowDownIcon />;
  };

  const displayFavoriteStatus = () => {
    return favoriteStatus ? (
      <StarIcon
        sx={{ color: "#f1c40f" }}
        onClick={() => {
          unfavoriteRiver()
        }}
      />
    ) : (
        <StarOutlineIcon
          onClick={() => {
            favoriteRiver()
          }}
        />
      );
  };

  const displayRiverAlerts = () => {
    if (warmWater || lowWater || highWater || iced) {
      return (
        <Stack>
          {warmWater ? <RiverAlert key={'warmWater'} alert={'warmWater'} /> : ''}
          {iced ? <RiverAlert key={'iced'} alert={'iced'} /> : ''}
          {lowWater ? <RiverAlert key={'lowWater'} alert={'lowWater'} /> : ''}
          {highWater ? <RiverAlert key={'highWater'} alert={'highWater'} /> : ''}
        </Stack>
      )
    }
  }

  return (
    <>
      <TableRow key={usgsId}>
        <TableCell>{displayFavoriteStatus()}</TableCell>
        <TableCell>
          {name} {geoTag}
        </TableCell>
        <TableCell>{currentCFS}</TableCell>
        <TableCell>{displayRiverAlerts()}</TableCell>
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
