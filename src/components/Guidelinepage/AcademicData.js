import { Box, Image, Text,Flex ,Link} from '@chakra-ui/react';
 
 
 const AcademicData= () =>(
 <Box my={6}>
       <Box ml={{ base: 6, lg: "67px" }} mb={2}>
      <Text  fontSize={{ base: "xs", lg: "20px" }}>
        Reference:{' '}
        <Link
          href="https://pubmed.ncbi.nlm.nih.gov/38395525/#"
          color="#0E5674"
          isExternal
        >
          https://pubmed.ncbi.nlm.nih.gov/38395525/#
        </Link>
      </Text>
      </Box>

       <Flex ml={{ base: 6, lg: "67px" }} mt="30px"gap="10px" align="center">
        <Image src="../assets/hand.webp" alt="New Logo" boxSize={{ base: "20px", lg: "30px" }} />
        <Text
          fontSize={{ base: "lg", lg: "xl" }}
          fontWeight="bold"
          fontFamily="'Noto Sans', sans-serif"
          color="#0E5674"
        >
         Academic Supported By
        </Text>
      </Flex>

       <Flex ml={{ base: 8, lg: "67px" }} gap={{ base: "10px", lg: "50px" }} align="center"   direction={{ base: "row", lg: "row" }}>
        <Image src="../assets/pfizer.webp" alt="New Logo" boxSize={{ base: "130px", lg: "200px" }} />
      
        <Text
          fontSize={{ base: "md", lg: "lg" }}
          fontFamily="'Noto Sans', sans-serif"
          color="#000000"
          mt={{ base: "10px", lg: "30px" }}
          p={{ base: 2,  lg: 6 }}
          maxW={{ base: "500px",  lg: "800px" }}
          textAlign="left"
         
        >
         Pfizer, founded in 1849, is a global pharmaceutical leader known for groundbreaking contributions to healthcare. 
         Our guidelines, supported by Pfizer's legacy, prioritize evidence-based practices for optimal patient care, reflecting 
         a shared commitment to advancing medical standards.
        </Text>
        
      </Flex>
</Box>
 );

export default  AcademicData;