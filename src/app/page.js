import React from 'react';
import Header from './components/Shared/Header';
import TradersConnect from './components/TradersConnect';
import TCCopierSection from './components/TCCopierSection';
import TcAnaylzer from './components/TcAnaylzer';


const Homepage = () => {
  return (
    <div>
      <h1 className='text-2xl'>
      <Header></Header>
      <TradersConnect></TradersConnect>
      <TCCopierSection></TCCopierSection>
      <TcAnaylzer></TcAnaylzer>
      </h1>
    </div>
  );
};

export default Homepage;