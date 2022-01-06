import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './style.css';
import 'leaflet/dist/leaflet.css';
import RiverInfo from './riverInfo/RiverInfo';

const Map = () => {
    return (
        <div className='map-container'>
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
                <RiverInfo />
            </MapContainer>
        </div>
    );
};

export default Map;