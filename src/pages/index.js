
import React from 'react';
import Header from '../components/Layout/Header';
import RecentlyAdded from '../components/Homepage/RecentlyAdded';
import MostlyViewed from '../components/Homepage/MostlyViewed';
import AllGuidelines from '../components/Homepage/AllGuidelines';


const HomePage = () => {
  return (
    <>
      <Header />
      <RecentlyAdded/>
      <MostlyViewed/>
      <AllGuidelines/>
    </>
  );
};

export default HomePage;
