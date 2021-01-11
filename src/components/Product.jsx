import React from 'react';
import { URL_API } from '../globals/env';

const Product = ({ product, handleAddToCart }) => {
  const { image, title, price, descripcion } = product;

  return (
    <div className="Products-item">
      <img src={`${URL_API}${image.url}`} alt={`${URL_API}${image.title}`} />
      <div className="Products-item-info">
        <h2>
          {title}
          <span>$ {price} </span>
        </h2>
        <p>{descripcion}</p>
      </div>
      <button type="button" onClick={handleAddToCart(product)}>
        Comprar
      </button>
    </div>
  );
};

export default Product;
