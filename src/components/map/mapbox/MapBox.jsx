import React, { useRef, useEffect } from "react";
import MapSideNav from "./MapSideNav";
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "!mapbox-gl";
// import the mapbox styles
// alternatively can use a link tag in the head of public/index.html
// see https://docs.mapbox.com/mapbox-gl-js/api/
import "mapbox-gl/dist/mapbox-gl.css";



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
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [-107.0785, 39.3725],
      zoom: 10,
    })

    // cleanup function to remove map on unmount
    return () => map.remove()
  }, [])

  return (<>
    <div ref={mapContainer} style={{ width: "80%", height: "100vh" }}/>
    {/* <MapSideNav /> */}
  </>);
}

export default MapBoxMap;