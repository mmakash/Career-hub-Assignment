import React from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;