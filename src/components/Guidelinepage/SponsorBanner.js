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
              ml={{ base: '20px', md: '30px' }}
              src={banner.image}
              alt="Sponsor Banner"
              w={{ base: '370px', md: '1640px' }}
              h={{ base: '200px', md: '300px' }}
              objectFit="cover"
              borderRadius="md"
            />
            <Box
              position="absolute"
              top={{ base: '12%', md: '10%' }}
              left={{ base: '6%', md: '8%' }}
              bg="rgba(0, 0, 0, 0.7)"
              p={{ base: 2, lg: 6 }}
              ml={{ base: '15px'}}
              borderRadius="md"
              w={{ base: '300px', md: '500px' }}
              h={{ base: '150px', md: '240px' }}
              color="white"
            >
              <Text fontWeight="bold" fontSize={{ base: 'xs', md: 'xl' }}>
                {banner.title}
              </Text>
              <Text mt={{ base: 1, md: 2 }} fontSize={{ base: 'xs', md: 'md' }}>
                {banner.description}
              </Text>
              <Button
                mt={{ base: 1, md: 4 }}
                mb={{ base: 1, md: 4 }}
                size={{ base: 'xs',md: 'md' }}
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
