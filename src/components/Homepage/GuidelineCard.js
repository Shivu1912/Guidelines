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
      w={{ base: '300px', md: '360px', lg: '420px' }}
      h={{ base: '200px', md: '200px', lg: '230px' }}
      borderRadius="md"
      boxShadow="sm"
      p={{ base: 4, md: 5 }}
      mt={2}
      position="relative"
    >
      <Box>
        <Text fontWeight="bold" fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} mb={2} color="#000000">
          {title}
        </Text>

        <Text fontSize={{ base: 'xs', lg: 'sm' }} mb={2} color="#262626" pr={{ base: 0, lg: '100px' }}>
          {authors}
        </Text>

        <Text fontSize={{ base: 'xs', lg: 'sm' }} fontWeight="semibold" color="#303030">
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
          onClick={handleReadMore}
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
        maxH={{ base: '80px', lg: '120px' }}
        maxW={{ base: '60px', lg: '90px' }}
      />
    </Box>
  );
};

export default GuidelineCard;
