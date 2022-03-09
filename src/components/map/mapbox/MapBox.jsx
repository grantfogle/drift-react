import React, { useRef, useEffect } from "react";
import MapSideNav from "./MapSideNav";
import MapBoxSearch from "./MapBoxSearch";
import TopNavigation from "../../topNavigation/TopNavigation";
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "!mapbox-gl";
// import the mapbox styles
// alternatively can use a link tag in the head of public/index.html
// see https://docs.mapbox.com/mapbox-gl-js/api/
import "mapbox-gl/dist/mapbox-gl.css";
import { flexbox } from "@mui/system";



// Grab the access token from your Mapbox account
// I typically like to store sensitive things like this
// in a .env file
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN

const MapBoxMap = () => {
  const mapContainer = useRef()

  // this is where all of our map logic is going to live
  // adding the empty dependency array ensures that the map
  // is only rendered once
  useEffect(() => {
    // create the map and configure it
    // check out the API reference for more options
    // https://docs.mapbox.com/mapbox-gl-js/api/map/
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      // style: "mapbox://styles/mapbox/xoutdoors-v11",
      style: "mapbox://styles/mapbox/outdoors-v11?optimize=true",
      center: [-107.0785, 39.3725],
      zoom: 10,
    })

    // cleanup function to remove map on unmount
    return () => map.remove()
  }, [])

  return (
    <div style={{ width: "100%", height: "100%", display: 'flex', flexDirection: 'column',  }}>
      <TopNavigation/>
      <div ref={mapContainer} style={{ width: "100%", height: "90%" }}/>
    </div>
  );
}

export default MapBoxMap;

// generic notes

// creating data sources
  // symbols
  /* NOTES ON COMPONENT DESIGN
  - A user can search a river
  - A user can search a watershed
  - a user can click a river and view up to date flow info
  - And nearby rivers (data + line) 
  - A user can view public access points (symbol)
  - A user can view up to date fishing regulations (data)
  - A user can view public land: federal, state, blm, city/county (fill)
  - A user can view fly shops (symbol)
  - A user can view boat ramps (symbol)
  - A user can view trails (symbol)
  - A user can view campsites (symbol)
  - A user can view easements (symbol)
  */

  /*
    Component Needs
    > Navigation
    > User Profile ( settings )
    > Search Box
    > River Popup
    > Legend
    > Map Tools (tbd)
  */
