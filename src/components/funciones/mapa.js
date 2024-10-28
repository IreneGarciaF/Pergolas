import React from 'react';
import {MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Icono para el marcador
const storeIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
    iconSize: [41, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    shadowSize: [41, 41]
});

const MapComponent = ({position}) => {

    return (
        <MapContainer center={position} zoom={13} style={{ height: "500px", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={storeIcon}>
                <Popup>
                    ¡Aquí está nuestra tienda!
                </Popup>
            </Marker>
        </MapContainer>
    );

};

export default MapComponent;

