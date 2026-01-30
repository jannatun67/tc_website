import React from 'react';
import Header from './components/Shared/Header';
import TradersConnect from './components/TradersConnect';
import TCCopierSection from './components/TCCopierSection';
import TcAnaylzer from './components/TcAnaylzer';
import TcCompare from './components/TcCompare';
import FeatureCardHome from './components/FeatureCards/FeatureCardHome';
import MarketTools from './components/MarketTools';
import WorksWhere from './components/WorksWhere';



const Homepage = () => {
  return (
    <div>
      <h1 className='text-2xl'>
      <Header></Header>
      <TradersConnect></TradersConnect>
      <TCCopierSection></TCCopierSection>
      <TcAnaylzer></TcAnaylzer>
      <TcCompare></TcCompare>
     <FeatureCardHome></FeatureCardHome>
     <MarketTools></MarketTools>
     <WorksWhere></WorksWhere>
      </h1>
    </div>
  );
};

export default Homepage;