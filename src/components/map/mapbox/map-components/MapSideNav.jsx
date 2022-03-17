import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import PersonIcon from '@mui/icons-material/Person';
import WaterIcon from '@mui/icons-material/Water';
import LayersIcon from '@mui/icons-material/Layers';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SettingsIcon from '@mui/icons-material/Settings';
import StarIcon from '@mui/icons-material/Star';
import { Link } from "react-router-dom";

const MapSideNav = () => {
  return (
    <Box sx={{ width: '200px', height: '100vh', backgroundColor: '#fff'}}>
      <nav aria-label="main mailbox folders" sx={{width: '200px'}}>
        <List>
        <ListItem disablePadding sx={{height: '100px'}}>
            <ListItemButton>
              <ListItemIcon>
                <WaterIcon />
              </ListItemIcon>
              <ListItemText primary="Drift" />
            </ListItemButton>
          </ListItem>
          <Divider/>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ArrowBackIcon />
              </ListItemIcon>
              <Link to="/" style={{ textDecoration: "none" }}>
                <ListItemText primary="Back" />
              </Link>
            </ListItemButton>
          </ListItem>
          <Divider/>
          <ListItem disablePadding sx={{height: '100px'}}>
            <ListItemButton>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Favorites" />
            </ListItemButton>
          </ListItem>
          <Divider/>
          <ListItem disablePadding sx={{height: '100px'}}>
            <ListItemButton>
              <ListItemIcon>
                <LayersIcon />
              </ListItemIcon>
              <ListItemText primary="Layers" />
            </ListItemButton>
          </ListItem>
          <Divider/>
          <ListItem disablePadding sx={{height: '100px'}}>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <Divider/>
          <ListItem disablePadding sx={{height: '100px'}}>
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="My Account" />
            </ListItemButton>
          </ListItem>
          <Divider/>
        </List>
      </nav>
    </Box>
  );
}

export default MapSideNav;