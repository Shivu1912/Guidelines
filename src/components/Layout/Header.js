
import React from 'react';
import {
  Box,
  Flex,
  Image,
  Button,
  Container,
  Heading,
} from '@chakra-ui/react';
import SearchBar from '../Homepage/SearchBar';
import { useRouter } from 'next/router';


export const Header = () => {
 const router = useRouter(); 
 
 
  return (
    <Box bg="#D7F3FF4D" px={{ base: 1,  md: 2 }} py={{ base: 1,  md: 1 }}  height={{base: "180px", md: "363px"}} >
    
      <Flex
        align="center"
        justify="space-between"
        flexWrap="wrap"
        gap={4}
>
  <Image
    src="../assets/medflix_logo.webp"
    alt="medflix Logo"
    width={{ base: "80px",  md: "180px" }}
  />

  <Button
    bg="#0E5674"
    color="white"
    _hover={{ bg: "#0a3f59" }}
    size={{ base: "xs",  md: "lg" }}
    onClick={() => router.push('/signin')}
  >
    Sign In
  </Button>
</Flex>

      <Container maxW="container.lg" mt={{ base: 2,  md: 10 }}>
        <Flex justify="center" mt={{ base: 2,  md: 6 }}>
          <Image
            src="../assets/GC.webp"
            alt="GCLogo"
            width={{ base: "140px", md: "250px" }}
            height="auto"
          />
        </Flex>

        <Heading
          as="h1"
          mt={4}
          textAlign="center"
          fontWeight={600}
          fontSize={{ base: "md", md: "3xl" }}
          lineHeight="1.2"
        >
          World’s Top Clinical Guidelines<br />
          Compared and simplified
        </Heading>
      </Container>

     
      <Box mt={{ base: 2,  md: 8 }} >
        <SearchBar />

      </Box>
    </Box>
  );
};

export default Header;
