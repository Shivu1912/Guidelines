import { Box, Input, Button, Text, Flex, Image, InputGroup } from '@chakra-ui/react';

const QuestionBar = ({ data }) => {
  const guidelineTitle = data?.title || "this guideline";
 
  return (
  <Box bg="#D7F3FF4D" ml={{ base: 6,md: "30px" }} mr={{ base: 2,md: "20px" }}  my={{ base: 4,md: 8}}  p={{ base: 2,md: 4 }}  position="relative"
    borderRadius="md">
        
   <Flex
      position="absolute"
      top="8px"
      left="50%"
      transform="translateX(-50%)"
      align="center"
      gap="10px"
    >
            <Image src="../assets/chat.webp" alt="New Logo" boxSize={{ base: "16px", md: "25px" }} />
            <Text
              fontSize={{ base: "md", md: "xl" }}
              fontWeight="bold"
              color="#0E5674"
            >
             Ask GC
            </Text>
          </Flex> 
    <Text  mt={{ base: 6, md: 10 }} mb={2} fontSize={{ base: "sm", md: "xl" }} align="center">Ask any question relating to the <b>““{guidelineTitle}””</b> guidelines</Text>
  <Box borderRadius="md" p={{ base: 2,md: 4 }} maxW="900px" mx={{ base: "50px", md: "280px" }} height={{ base: "50px",md: "100px" }}>
       <Flex
       
         align="center"
         border="1px solid"
         borderColor="gray.200"
         borderRadius="2px"
         overflow="hidden"
         bg="white"
         height={{ base: "30px", md: "60px" }}
         boxShadow="md"
       >
        
         <InputGroup flex="1"  size={{ base: "xs",md: "lg" }}>
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
             size={{ base: "xs",md: "md" }}
             mr={{ base: 2,md: 4 }}
             my={{ base: 4, md: 6 }}

           >
             Get Answer Now
           </Button>
           

       </Flex>
     </Box>
  </Box>
);
};

export default QuestionBar;
