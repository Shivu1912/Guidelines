import { useEffect, useState } from 'react';
import { Box, Flex, Text,Image ,Divider} from '@chakra-ui/react';
import GuidelineCard from '../Homepage/GuidelineCard';
import mostlyViewedData from '../../Helper/Data/mostlyViewed.json';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const MostlyViewed = () => {

  const [mostlyViewed, setmostlyViewed] = useState([]);
  
     useEffect(() => {
        setmostlyViewed( mostlyViewedData);
      }, []);

  return (
    <Box my={6}>
         
         <Flex  ml={{ base: 10, lg: "67px" }} mt="30px" gap="10px" align="center">
           <Image src="../assets/eye.webp" alt="New Logo" boxSize={{ base: "30px", lg: "50px" }} />
           <Text
            fontSize={{ base: "xl", lg: "2xl" }}
             fontWeight="bold"
             fontFamily="'Noto Sans', sans-serif"
             color="#0E5674"
           >
           Mostly Viewed
           </Text>
         </Flex>
   
         <Divider
           borderColor="#000000"
           mt="10px"
           ml={{ base: 10, lg: "67px" }}
           height="1px"
           width={{ base: "90%", md: "95%" }}
         />
   
        
         <Box mt={4} pl={{ base: 10, md: 16 }}>
           <Swiper spaceBetween={16} slidesPerView="auto" style={{ paddingBottom: '20px' }}>
              {mostlyViewed.map((item, index) => (
                <SwiperSlide key={item.id || index} style={{ width: 'auto' }}>
                  <GuidelineCard
                    id={item.id || index.toString()}
                    title={item.title}
                    authors={item.authors}
                    source={item.source}
                    date={item.date}
                    image={item.image}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
         </Box>
       </Box>
  );
};

export default MostlyViewed;