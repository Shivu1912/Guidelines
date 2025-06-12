
import { Box} from '@chakra-ui/react';
import GuidelineCard from '../Homepage/GuidelineCard';
import Divider from '../common/Divider';
import Title from '../common/Title';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const MostlyViewed = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <Box my={{ base: 2, md: 6 }}>
         
    
        <Title src="../assets/eye.webp" title="Mostly Viewed" />

         <Divider/>
   
        
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