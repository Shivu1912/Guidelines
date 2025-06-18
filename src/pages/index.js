import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import Header from '../components/Layout/Header';
import RecentlyAdded from '../components/Homepage/RecentlyAdded';
import MostlyViewed from '../components/Homepage/MostlyViewed';


const AllGuidelines = dynamic(() => import('../components/Homepage/AllGuidelines'), {
  ssr: false,
});

const HomePage = () => {
  const [data, setData] = useState({
    recentlyAdded: [],
    mostlyViewed: [],
    allGuidelines: [],
  });

  useEffect(() => {
    axios.get('/api/homepage')
      .then((response) => setData(response.data))
      .catch((err) => console.error('Error fetching data', err));
  }, []);

  return (
    <Box>
      <Header />
      <RecentlyAdded data={data.recentlyAdded} />
      <MostlyViewed data={data.mostlyViewed} />
      <AllGuidelines data={data.allGuidelines} />
    </Box>
  );
};

export default HomePage;
