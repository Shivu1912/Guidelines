import { Box, Button, Image, Text } from '@chakra-ui/react';

const GuidelineCard = ({ title, authors, source, date, image }) => {
  return (
    <Box
      bg="#F2FAFD"
      w="100%"
      maxW="420px"
      borderRadius="md"
      boxShadow="sm"
      p={5}
      mt={6}
      position="relative" 
    >
     
      <Box> 
        <Text fontWeight="bold" fontSize="lg" mb={2} color="#000000">
          {title}
        </Text>

        <Text fontSize="sm" mb={2} color="#262626" pr="100px">
          {authors}
        </Text>

        <Text fontSize="sm" fontWeight="semibold" color="#303030">
          {source} | {date}
        </Text>

        <Button
          mt={4}
          size="sm"
          bg="#0E5674"
          color="white"
          _hover={{ bg: "#0a3f59" }}
          px={6}
          borderRadius="md"
        >
          Read more
        </Button>
      </Box>

      <Image
        src={image}
        alt={title}
        position="absolute"
        bottom="20px"
        right="20px"
        maxH="120px"
        maxW="90px"
      
      />
    </Box>
  );
};

export default GuidelineCard;
