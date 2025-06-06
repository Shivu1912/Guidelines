
import React, { useEffect, useState } from 'react';
import Header from '../components/Layout/Header';
import RecentlyAdded from '../components/Homepage/RecentlyAdded';
import MostlyViewed from '../components/Homepage/MostlyViewed';
import AllGuidelines from '../components/Homepage/AllGuidelines';

const HomePage = () => {
  const [data, setData] = useState({
    recentlyAdded: [],
    mostlyViewed: [],
    allGuidelines: [],
  });

  useEffect(() => {
    fetch('/api/homepage')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error('Error fetching data', err));
  }, []);

  return (
    <>
      <Header />
      <RecentlyAdded data={data.recentlyAdded} />
      <MostlyViewed data={data.mostlyViewed} />
      <AllGuidelines data={data.allGuidelines} />
    </>
  );
};

export default HomePage;
