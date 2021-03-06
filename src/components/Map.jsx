import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { REACT_APP_GOOGLE_MAPS_API_KEY } from '../globals/env';

const Map = ({ data }) => {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };
  const defaultCenter = {
    lat: parseFloat(data.lat),
    lng: parseFloat(data.lng),
  };
  return (
    <LoadScript googleMapsApiKey={REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={17} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
