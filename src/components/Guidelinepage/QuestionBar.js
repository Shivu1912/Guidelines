import { Box, Input, Button, Text,Flex, Image,InputGroup } from '@chakra-ui/react';

const QuestionBar = () => (
  <Box bg="#D7F3FF4D" mx={{ base: 8,lg: "67px" }} my={{ base: 4, lg: 8}}  p={{ base: 2, lg: 4 }}  position="relative"
    borderRadius="md">
        
   <Flex
      position="absolute"
      top="8px"
      left="50%"
      transform="translateX(-50%)"
      align="center"
      gap="10px"
    >
            <Image src="../assets/chat.webp" alt="New Logo" boxSize={{ base: "16px", lg: "20px" }} />
            <Text
              fontSize={{ base: "md", lg: "lg" }}
              fontWeight="bold"
              fontFamily="'Noto Sans', sans-serif"
              color="#0E5674"
            >
             Ask GC
            </Text>
          </Flex> 
    <Text  mt={{ base: 6, lg: 10 }} mb={2} fontSize={{ base: "md", lg: "lg" }} align="center">Ask any question relating to the <b>“AGA Clinical Practice Guideline on Fecal Microbiota-Based Therapies for Select Gastrointestinal Diseases”</b> guidelines</Text>
  <Box borderRadius="md" p={{ base: 2, lg: 4 }} maxW="900px" mx={{ base: "50px", lg: "280px" }} height={{ base: "50px", lg: "100px" }}>
       <Flex
       
         align="center"
         border="1px solid"
         borderColor="gray.200"
         borderRadius="2px"
         overflow="hidden"
         bg="white"
         height={{ base: "40px", lg: "60px" }}
         boxShadow="md"
       >
        
         <InputGroup flex="1">
           <Input
             type="text"
             placeholder="Type your question..."
             border="none"
             _focus={{ outline: "none", boxShadow: "none" }}
            
           />
         </InputGroup>
          <Button
             bg="#0E5674"
             color="white"
             as={Button}
             
             fontWeight="bold"
             _hover={{ bg: "gray" }}
             fontFamily="Inter"
             size={{ base: "sm", lg: "md" }}
             mr={{ base: 2, lg: 4 }}
             my={{ base: 2, lg: 6 }}

           >
             Get Answer Now
           </Button>
           

       </Flex>
     </Box>
  </Box>
);

export default QuestionBar;
