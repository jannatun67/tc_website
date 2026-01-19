import React from 'react';
import Header from './components/Shared/Header';
import TradersConnect from './components/TradersConnect';


const Homepage = () => {
  return (
    <div>
      <h1 className='text-2xl'>
      <Header></Header>
      <TradersConnect></TradersConnect>
      </h1>
    </div>
  );
};

export default Homepage;