import { useEffect, useState } from 'react';
import initialState from '../initialState';
import { URL_API } from '../globals/env';
import axios from 'axios';

const URL_PRODUCTS = 'products';

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Create an scoped async function in the hook
    const getProducts = async () => {
      const resProducts = await axios(`${URL_API}/${URL_PRODUCTS}`);
      setProducts(resProducts.data);
    };
    // Execute the created function directly
    getProducts();
  }, []);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (indexToRemove) => {
    setState({
      ...state,
      cart: state.cart.filter(
        (_item, indexCurrent) => indexCurrent !== indexToRemove
      ),
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: payload,
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    products,
    state,
  };
};

export default useInitialState;
