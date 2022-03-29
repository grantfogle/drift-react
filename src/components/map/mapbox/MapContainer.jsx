import React, { useState, useEffect } from "react";
import { MapSearchBox } from "./map-components/MapSearchBox";
import {MapBox} from './MapBox';
// import { RentalCard } from "./components/RentalCard";

const MapContainer = () => {
	const [search, setSearch] = useState();
	// const [searchResults, isLoading] = useFetchData('/rentals?location={search}', [search])
	const [zoom, setZoom] = useState(12);
    const [center, setCenter] = useState([-111.65, 40.581]);

	useEffect(() => {
		setZoom(searchResults.meta.zoom)
		setCenter(searchResults.meta.center)
	}, [searchResults])	

	return (
		<section>
			<MapSearchBox value={search} onChange={handleChange} />
			<MapBox
	            center={center}
	            basemap="mapbox://styles/mapbox/outdoors-v11"
	            zoom={zoom} />
            {/* <RentalCard data={seachResults?.data} loading={isLoading} /> */}
		</section>
    );
}  

export default MapContainer;