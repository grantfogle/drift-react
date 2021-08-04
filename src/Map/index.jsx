import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './style.css';
import 'leaflet/dist/leaflet.css';

const Map = () => {
    return (
        <div className='map-container'>
            <h1>DRIFT</h1>
            
            <MapContainer center={[39.3689, -107.0328]} zoom={13} scrollWheelZoom={false} className='map'>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;