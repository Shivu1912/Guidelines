// src/components/layout/Header.js
import React from 'react';
import {
  Box,
  Flex,
  Image,
  Spacer,
  Button,
  Container,
  Heading,

} from '@chakra-ui/react';
import SearchBar from '../Homepage/SearchBar';


export const Header = () => {

  return (
    <Box bg="#D7F3FF4D" px={6} py={4} height="365px">
      <Flex align="center">
        <Image src="..\assets\medflix_logo.webp" alt="medflix Logo" width="180px" height="43.15px" />
        <Spacer />
       
        <Button bg="#0E5674" color="white" _hover={{ bg: "#0a3f59" }} size="lg">
          Sign In
        </Button>
      </Flex>

      
      <Container maxW="container.lg" mt={10}>
          <Flex justify="center" mt={4}>
                    <Image src="../assets/GC.webp" alt="GCLogo" width="250px" height="100px" top="121px"/>
          </Flex>
        
          <Heading as="h1" my={4}  textAlign="center" fontFamily="'Noto Sans', sans-serif"   fontWeight={600} fontSize="40px" lineHeight="1">
                  World’s Top Clinical Guidelines<br />
                  Compared and simplified
          </Heading>     
      </Container>

      <SearchBar />
      

    </Box>
  );
};

export default Header;
