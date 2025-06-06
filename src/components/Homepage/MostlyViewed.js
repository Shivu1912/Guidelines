import { useEffect, useState } from 'react';
import { Box, Flex, Text,Image ,Divider} from '@chakra-ui/react';
import GuidelineCard from '../Homepage/GuidelineCard';
;

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const MostlyViewed = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <Box my={{ base: 2, md: 6 }}>
         
         <Flex  ml={{ base: 4, md: "67px" }} mt={{ base: 2, md: "30px" }} gap="10px" align="center">
           <Image src="../assets/eye.webp" alt="New Logo" boxSize={{ base: "25px",  md: "50px" }} />
           <Text
            fontSize={{ base: "lg",  md: "2xl" }}
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
           ml={{ base: 4,  md: "67px" }}
           height="1px"
           width={{ base: "90%", md: "95%" }}
         />
   
        
         <Box mt={4} pl={{ base: 4, md: 16 }}>
           <Swiper spaceBetween={16} slidesPerView="auto" style={{ paddingBottom: '20px' }}>
              {data.map((item, index) => (
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