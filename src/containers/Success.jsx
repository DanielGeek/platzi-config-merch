import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Map from '../components/Map';
import AppContext from '../context/AppContext';
import useGoogleAddress from '../hooks/useGoogleAddress';
import '../styles/components/Success.css';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const history = useHistory();
  // uso de custom hook para obtener la lat y lng segun la direccion en string
  const location = useGoogleAddress(buyer.address);
  return buyer.address !== undefined ? (
    <div className="Succes">
      <div className="Success-content">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="Success-map">
          <Map data={location} />
        </div>
      </div>
    </div>
  ) : null;
};

export default Success;
