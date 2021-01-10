import React from 'react';
import { Helmet } from 'react-helmet';
import Products from '../components/Products';
import initialState from '../initialState';

const Home = () => {
  return (
    <>
      <Helmet>
        <Products products={initialState.products} />;
      </Helmet>
    </>
  );
};

export default Home;
