import { Box, Image, Text, Button } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const SponsorBannerSlider = ({ data }) => {
  if (!data || !data.sponsorBanners || data.sponsorBanners.length === 0) {
    return <Text ml={4}>No banners found</Text>;
  }

  const { sponsorBanners } = data;

  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={1}
      style={{ paddingBottom: '20px' }}
    >
      {sponsorBanners.map((banner, index) => (
        <SwiperSlide key={index}>
          <Box position="relative" my={6}>
            <Image
              ml={{ base: '40px', lg: '50px' }}
              src={banner.image}
              alt="Sponsor Banner"
              w={{ base: '380px', lg: '1600px' }}
              h={{ base: '200px', lg: '300px' }}
              objectFit="cover"
              borderRadius="md"
            />
            <Box
              position="absolute"
              top="10%"
              left={{ base: '10%', lg: '8%' }}
              bg="rgba(0, 0, 0, 0.7)"
              p={{ base: 2, lg: 6 }}
              ml={{ base: '15px'}}
              borderRadius="md"
              w={{ base: '300px', lg: '500px' }}
              h={{ base: '150px', lg: '240px' }}
              color="white"
            >
              <Text fontWeight="bold" fontSize={{ base: 'xs', lg: 'xl' }}>
                {banner.title}
              </Text>
              <Text mt={{ base: 1, lg: 2 }} fontSize={{ base: 'xs', lg: 'md' }}>
                {banner.description}
              </Text>
              <Button
                mt={{ base: 1, lg: 4 }}
                mb={{ base: 1, lg: 4 }}
                size={{ base: 'xs', lg: 'md' }}
                bg="yellow.400"
                color="black"
                _hover={{ bg: 'yellow.300' }}
              >
                Get in Touch
              </Button>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SponsorBannerSlider;
