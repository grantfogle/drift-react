import React, { useRef, useEffect } from "react";
import MapSideNav from "./map-components/MapSideNav";
import MapBoxSearch from "./map-components/MapSearchBox";
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
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const Popup = ({ routeName, routeNumber, city, type }) => (
  <div className="popup">
    <h3 className="route-name">{routeName}</h3>
    <div className="route-metric-row">
      <h4 className="row-title">Route #</h4>
      <div className="row-value">{routeNumber}</div>
    </div>
    <div className="route-metric-row">
      <h4 className="row-title">Route Type</h4>
      <div className="row-value">{type}</div>
    </div>
    <p className="route-city">Serves {city}</p>
  </div>
);

const MapBoxMap = () => {
  const mapContainer = useRef();
  // const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));


  // this is where all of our map logic is going to live
  // adding the empty dependency array ensures that the map
  // is only rendered once
  useEffect(() => {
    // create the map and configure it
    // check out the API reference for more options
    // https://docs.mapbox.com/mapbox-gl-js/api/map/
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/grantjfogle/cl0svc578005h14nxo5fv3b9c?optimize=true",
      // style: "mapbox://styles/mapbox/outdoors-v11?optimize=true",
      center: [-107.0785, 39.3725],
      zoom: 10,
    });

    map.on("load", () => {
      map.addSource("fly-shops", {
        type: "geojson",
        data:
          "https://studio.mapbox.com/tilesets/grantjfogle.cl0j08erc2sap21llmuy8nu09-7un8j",
      });

      map.addLayer({
        id: "fly-shops-circles",
        type: "circle",
        source: "fly-shops",
        paint: {
          "line-color": "#4094ae",
          "line-width": 4,
        },
      });

    });

    // cleanup function to remove map on unmount
    return () => map.remove();
  }, []);

  return (
    <>
      <TopNavigation />
      <div style={{ width: "100%", height: "100%", position: 'absolute', display: 'flex' }}>
        {/* <MapBoxSearch style={{width: "300px", height: "56px", position: 'relative'}}/> */}
        {/* <MapSideNav /> */}
        {/* <MapBoxSearch /> */}
        <div ref={mapContainer} style={{ width: "100%", height: "100vh"}}/>
        {/* <div ref={mapContainer} style={{ width: "100%", height: "100vh", position: 'relative', top: -56, left: 0 }}/> */}
      </div>
    </>
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
