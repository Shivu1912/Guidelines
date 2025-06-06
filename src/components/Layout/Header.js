
import React from 'react';
import {
  Box,
  Flex,
  Image,
  Spacer,
  Button,
  Container,
  Heading,
  Stack
} from '@chakra-ui/react';
import SearchBar from '../Homepage/SearchBar';

export const Header = () => {
  
 
  return (
    <Box bg="#D7F3FF4D" px={{ base: 4, lg: 6 }} py={{ base: 4, lg: 6 }}   height={{base: "250px", lg: "395px"}} >
      
      <Flex
        direction="row"
        align="center"
        justify="space-between"
        flexWrap="wrap"
        gap={4}
>
  <Image
    src="../assets/medflix_logo.webp"
    alt="medflix Logo"
    width={{ base: "100px", lg: "180px" }}
  />

  <Button
    bg="#0E5674"
    color="white"
    _hover={{ bg: "#0a3f59" }}
    size={{ base: "sm", lg: "lg" }}
  >
    Sign In
  </Button>
</Flex>

      <Container maxW="container.lg" mt={{ base: 4, lg: 10 }}>
        <Flex justify="center" mt={{ base: 4, lg: 6 }}>
          <Image
            src="../assets/GC.webp"
            alt="GCLogo"
            width={{ base: "180px", lg: "250px" }}
            height="auto"
          />
        </Flex>

        <Heading
          as="h1"
          mt={4}
          textAlign="center"
          fontFamily="'Noto Sans', sans-serif"
          fontWeight={600}
          fontSize={{ base: "lg", md: "3xl", lg: "4xl" }}
          lineHeight="1.2"
        >
          World’s Top Clinical Guidelines<br />
          Compared and simplified
        </Heading>
      </Container>

     
      <Box mt={{ base: 4, lg: 8 }}>
        <SearchBar />

      </Box>
    </Box>
  );
};

export default Header;
