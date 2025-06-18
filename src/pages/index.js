import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
