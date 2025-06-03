import { Box, Image, Text, Button } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const sponsorBanners = [
  {
    image: ' ../assets/bannerpfizer.webp',
    title: 'This page is supported by Pfizer as part of their educational initiative',
    description:
      'Pfizer, a trailblazer in healthcare, offers innovative medications like Lipitor and Viagra, setting new benchmarks in patient-centric solutions and medical excellence.',
  },
  {
    image:' ../assets/bannerpfizer.webp',
    title: 'Another Educational Support Message',
    description:
      'This is another educational message from a healthcare partner.',
  },
  {
    image: ' ../assets/bannerpfizer.webp',
    title: 'This page is supported by Pfizer as part of their educational initiative',
    description:
      'Pfizer, a trailblazer in healthcare, offers innovative medications like Lipitor and Viagra, setting new benchmarks in patient-centric solutions and medical excellence.',
  },
  {
    image: ' ../assets/bannerpfizer.webp',
    title: 'This page is supported by Pfizer as part of their educational initiative',
    description:
      'Pfizer, a trailblazer in healthcare, offers innovative medications like Lipitor and Viagra, setting new benchmarks in patient-centric solutions and medical excellence.',
  },
  
];

const SponsorBannerSlider = () => {
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
              ml={{ base: '20px', lg: '50px' }}
              src={banner.image}
              alt="Sponsor Banner"
              w={{ base: '380px', lg: '1400px' }}
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
              borderRadius="md"
              w={{ base: '300px', lg: '500px' }}
              h={{ base: '150px', lg: '240px' }}
              color="white"
            >
              <Text fontWeight="bold" fontSize={{ base: 'xs', lg: 'xl' }}>
                {banner.title}
              </Text>
              <Text mt={{ base: 1, lg: 2 }}fontSize={{ base: 'xs', lg: 'md' }}>
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
