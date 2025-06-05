
import { Box, Image, Text, Flex, Link } from '@chakra-ui/react';

const AcademicData = ({ data }) => {
  if (!data || !data.academicData) {
    return <Text ml={4}>Academic data not available.</Text>;
  }

  const {
    referenceLink,
    referenceText,
    supportImage,
    description,
  } = data.academicData;

  return (
    <Box my={6}>
      <Box ml={{ base: 6, lg: '67px' }} mb={2}>
        <Text fontSize={{ base: 'xs', lg: '20px' }}>
          Reference:{' '}
          <Link href={referenceLink} color="#0E5674" isExternal>
            {referenceText}
          </Link>
        </Text>
      </Box>

      <Flex ml={{ base: 6, lg: '67px' }} mt="30px" gap="10px" align="center">
        <Image src="/assets/hand.webp" alt="Support Icon" boxSize={{ base: '20px', lg: '30px' }} />
        <Text
          fontSize={{ base: 'lg', lg: 'xl' }}
          fontWeight="bold"
          fontFamily="'Noto Sans', sans-serif"
          color="#0E5674"
        >
          Academic Supported By
        </Text>
      </Flex>

      <Flex
        ml={{ base: 8, lg: '67px' }}
        gap={{ base: '10px', lg: '50px' }}
        align="center"
        direction={{ base: 'row', lg: 'row' }}
      >
        <Image src={supportImage} alt="Sponsor" boxSize={{ base: '130px', lg: '200px' }} />
        <Text
          fontSize={{ base: 'md', lg: 'lg' }}
          fontFamily="'Noto Sans', sans-serif"
          color="#000000"
          mt={{ base: '10px', lg: '30px' }}
          p={{ base: 2, lg: 6 }}
          maxW={{ base: '500px', lg: '800px' }}
          textAlign="left"
        >
          {description}
        </Text>
      </Flex>
    </Box>
  );
};

export default AcademicData;
