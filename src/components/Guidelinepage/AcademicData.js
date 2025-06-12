
import { Box, Image, Text, Flex, Link } from '@chakra-ui/react';
import Title from '../common/Title';

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
      
       <Title src="../assets/hand.webp" title="Academic Support By" />
    
      <Flex
        ml={{ base: 8,  md: '67px' }}
        gap={{ base: '10px',  md: '50px' }}
        align="center"
        direction={{ base: 'row',  md: 'row' }}
      >
        <Image src={supportImage} alt="Sponsor" boxSize={{ base: '130px',  md: '200px' }} />
        <Text
          fontSize={{ base: 'md',  md: 'lg' }}
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
