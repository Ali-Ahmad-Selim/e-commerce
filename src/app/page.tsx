"use client"
import React from 'react';
import PrimarySearchAppBar from "./(components)/Navbar/Navbar"
import Casual from "./(components)/casual/casual"
import Home from "./(components)/HomePage/Home"
import Tshirts from './(components)/t-shirts/tshirts';
import Trouser from './(components)/trouser/trouser';
import Footer from "./(components)/Footer/Footer"
import { useState } from 'react';

const HomePage = () => {
  const [name, setName] = useState<string | null>(null)
  
  // Function to render component based on state
  const renderComponent = () => {
    switch (name) {
      case null:
      case 'Home':
        return <Home />;
      case 'T-Shirts':
        return <Tshirts />;
      case 'Trousers':
        return <Trouser />;
      case 'Casual':
        return <Casual />;
      default:
        return <Home />;
    }
  };
  
  return (
    <div>
      <PrimarySearchAppBar name={name} setName={setName} />
      <div>
       
        
        {/* Render component based on state */}
        {renderComponent()}
      </div>
      <Footer/>
    </div>
  );
}

export default HomePage;
