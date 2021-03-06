import { useEffect, useState } from 'react';
import axios from 'axios';
import { REACT_APP_GOOGLE_MAPS_API_KEY } from '../globals/env';

// custom hook para obtener la dirección de envío
const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${REACT_APP_GOOGLE_MAPS_API_KEY}`;

  useEffect(async () => {
    const response = await axios(API);
    setMap(response.data.results[0].geometry.location);
  }, []);
  return map;
};

export default useGoogleAddress;
