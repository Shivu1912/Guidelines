import { Box, Button, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const GuidelineCard = ({ id, title, authors, source, date, image }) => {
  const router = useRouter();

  const handleReadMore = () => {
    router.push(`/guideline/${id}`);
  };

  return (
    <Box
      bg="#F2FAFD"
      w={{ base: '200px', md: '420px' }}
      h={{ base: '140px', md: '230px' }}
      borderRadius="md"
      boxShadow="sm"
      p={{ base: 2, md:5 }}
      mt={{ base: "2px", md: 2 }}
      position="relative"
    >
      <Box>
        <Text fontWeight="bold" fontSize={{ base: "xs", md: "xl" }} mb={{ base: "2px", md: 2 }} color="#000000">
          {title}
        </Text>

        <Text fontSize={{ base: '10px',  md: 'md' }} mb={{ base: "2px", md: 2 }} color="#262626" pr={{ base: 0,  md: '100px' }}>
          {authors}
        </Text>

        <Text fontSize={{ base: '10px',  md: 'md' }} fontWeight="semibold" color="#303030">
          {source} | {date}
        </Text>

        <Button
           mt={{ base: "2px", md: 4 }}
           fontSize={{ base: "8px",  md: 'md'}} 
           height={{ base: "14px",  md: "30px" }} 
           w={{ base: "50px",  md: "100px" }} 
           bg="#0E5674"
           color="white"
          _hover={{ bg: "#0a3f59" }}
          borderRadius="md"
          onClick={handleReadMore}
          >
          Read More
          </Button>
      </Box>

      <Image
        src={image}
        alt={title}
        position="absolute"
        bottom={{ base: '5px', md: '20px' }}
        right={{ base: '5px', md: '20px' }}
        maxH={{ base: '50px',  md: '120px' }}
        maxW={{ base: '60px',  md: '90px' }}
      />
    </Box>
  );
};

export default GuidelineCard;
