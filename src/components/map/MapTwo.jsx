import React, { useState, useContext } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, Polyline, Polygon, Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import './style.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import campIconSVG from '../../assets/icons/campground-solid.svg';
import BottomNav from './bottomNav/BottomNav';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

let polygon = [
    [
        39.223742741391305,
        -106.864013671875
    ],
    [
        39.22161498006378,
        -106.8310546875
    ],
    [
        39.20671884491848,
        -106.78985595703124
    ],
    [
        39.15988184949157,
        -106.77886962890625
    ],
];
let polyline = [
    [
        39.33429742980725,
        -106.96426391601562
    ],
    [
        39.307737713739556,
        -106.90383911132812
    ],
    [
        39.26947400794335,
        -106.9024658203125
    ],
    [
        39.26203141523749,
        -106.88323974609374
    ],
    [
        39.254588032219935,
        -106.88323974609374
    ]
]
const limeOptions = { color: 'lime' }
L.Marker.prototype.options.icon = DefaultIcon;

var USGS_USImagery = L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 20,
    attribution: 'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>'
});

const MapTwo = () => {
    return <>
        <MapContainer
            style={{ height: '80%', width: '100%', zIndex: -9999 }}
            center={[39.3689, -107.0328]}
            zoom={13}
            scrollWheelZoom={false}>
            {/* <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            /> */}
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}"
            />
            <Polyline pathOptions={limeOptions} positions={polyline} />
            <Polygon pathOptions={limeOptions} positions={polygon}>
                <Tooltip sticky>sticky Tooltip for Polygon</Tooltip>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
            </Polygon>
            <Marker position={[39.3689, -107.0328]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
        <BottomNav />
    </>
}

export default MapTwo;