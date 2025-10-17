import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

export default function Layout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#252525ff',  
        color: '#14A3B8', 
        minHeight: '100vh',
        fontFamily: 'Poppins, sans-serif',
        transition: 'all 0.3s ease',
      }}
    >
      <Header />
      <main style={{ padding: '20px 0' }}>
        <Outlet />
      </main>
      <CustomCursor />
      <Footer />
    </div>
  );
}
