import React from 'react';
import Header from './Component/Header';
import BannerSection from './Component/BannerSection';
import Category from './Component/Category';
import Jobs from './Component/Jobs';

const App = () => {
  return (
    <div>
      <Header />
      <BannerSection />
      <Category />
      <Jobs />
    </div>
  );
};

export default App;