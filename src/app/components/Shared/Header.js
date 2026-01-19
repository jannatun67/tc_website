import React from 'react';
import NavbarPage from './Navbar';
import Banner from './Banner';

const Header = () => {
    return (
        <div className="min-h-screen text-white rounded-4xl"
      style={{
        backgroundImage:
          "radial-gradient(1200px 600px at 50% -20%, #1fa89a 0%, rgba(31,168,154,0.15) 35%, transparent 60%), linear-gradient(180deg, #0f7f73 0%, #0b5f57 45%, #083f3a 100%)",
      }}>
            <NavbarPage></NavbarPage>
            <Banner></Banner>
        </div>
    );
};

export default Header;