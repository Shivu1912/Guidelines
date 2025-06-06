
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
    <Box my={{ base: 2, md: 6 }}>
      <Box ml={{ base: 6,  md: '67px' }} >
        <Text fontSize={{ base: 'xs', md: '20px' }}>
          Reference:{' '}
          <Link href={referenceLink} color="#0E5674" isExternal>
            {referenceText}
          </Link>
        </Text>
      </Box>

      <Flex ml={{ base: 6, md: '67px' }} mt={{ base: 4,  md: '30px' }} gap="10px" align="center">
        <Image src="/assets/hand.webp" alt="Support Icon" boxSize={{ base: '20px',  md: '30px' }} />
        <Text
          fontSize={{ base: 'lg', md: 'xl' }}
          fontWeight="bold"
          fontFamily="'Noto Sans', sans-serif"
          color="#0E5674"
        >
          Academic Supported By
        </Text>
      </Flex>

      <Flex
        ml={{ base: 8,  md: '67px' }}
        gap={{ base: '10px',  md: '50px' }}
        align="center"
        direction={{ base: 'row',  md: 'row' }}
      >
        <Image src={supportImage} alt="Sponsor" boxSize={{ base: '130px',  md: '200px' }} />
        <Text
          fontSize={{ base: 'md',  md: 'lg' }}
          fontFamily="'Noto Sans', sans-serif"
          color="#000000"
          mt={{ base: '10px',  md: '30px' }}
          p={{ base: 2, md: 6 }}
          maxW={{ base: '500px',  md: '800px' }}
          textAlign="left"
        >
          {description}
        </Text>
      </Flex>
    </Box>
  );
};

export default AcademicData;
