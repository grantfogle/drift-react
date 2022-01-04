import React, { useState, useContext } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import './style.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapTwo = () => {
    return <>
        <MapContainer style={{ height: '100vh', width: '100vw' }} center={[39.3689, -107.0328]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[39.3689, -107.0328]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
            </Marker>
        </MapContainer>
    </>
}

export default MapTwo;