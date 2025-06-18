import { Box, Input, Button, Text, Flex, Image, InputGroup } from '@chakra-ui/react';

const QuestionBar = ({ data }) => {
  const guidelineTitle = data?.title || "this guideline";
 
  return (
  <Box bg="#D7F3FF4D" mx={{ base: 6, md: "60px" }}   my={{ base: 4,md: 8}}  p={{ base: 2,md: 4 }}  position="relative"
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
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="bold"
              color="#0E5674"
            >
             Ask GC
            </Text>
    </Flex> 

    <Text  mt={{ base: 8, md: 10 }} mb={2} fontSize={{ base: "md", md: "xl" }} align="center">Ask any question relating to the <b>““{guidelineTitle}””</b> guidelines</Text>
   
    <Box borderRadius="md" px={{ base: 6, md: 4 }} py={4} w="full" maxW="900px" mx="auto">
        <Flex
          align="center"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="md"
          overflow="hidden"
          bg="white"
          h={{ base: "40px", md: "50px" }}
          boxShadow="md"
          >
          <InputGroup flex="1" size={{ base: "sm", md: "md" }}>
            <Input
              type="text"
              placeholder="Type your question..."
              border="none"
              px={4}
              _focus={{ outline: "none", boxShadow: "none" }}
            />
          </InputGroup>
          <Button
            bg="#0E5674"
            color="white"
            fontWeight="bold"
            _hover={{ bg: "#09475f" }}
            size={{ base: "xs", md: "sm" }}
            mr={{ base: 2,md: 4 }}
            my={{ base: 4, md: 6 }}
            borderRadius="md"
            >
            Get Answer Now
          </Button>
        </Flex>
    </Box>

  </Box>
);
};

export default QuestionBar;
