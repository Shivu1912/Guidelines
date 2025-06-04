import { Box, Heading, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import guidelineData from '../../Helper/Data/guideline.json';

const KeyHighlights = () => {
  const router = useRouter();
  const { id } = router.query;

  const guideline = guidelineData.find((g) => g.id === id);

  if (!guideline) {
    return <Text ml={4}>Loading or guideline not found.</Text>;
  }

  const { keyHighlights } = guideline;

  return (
   <Box bg="#D7F3FF4D" mx={{ base: 4,lg: 6 }} my={{ base: 4, lg: 6 }}  px={{ base: 2, lg: 4 }}  py={{ base: 2, lg: 4}}
    borderRadius="md" >
    <Heading size={{ base: 'sm', lg: 'md' }} pl={{ base: 2,lg: 4}} pt={{ base: 1,lg: 2 }} color="#0E5674">📑 Key Highlights</Heading>
    <Box  mx={{ base: 6, lg: 8 }} my={{ base: 4, lg: 6 }} pl={{ base: 2,lg: 8 }} fontSize={{base: "md", lg: "lg"}}> 
    <ReactMarkdown
        components={{
          li: ({ children }) => <li style={{ marginBottom: '4px', fontFamily: 'Inter' }}>{children}</li>
        }}
      >
       
        {keyHighlights.map((item, idx) => `${idx + 1}. ${item}`).join('\n')}
      </ReactMarkdown>
    </Box> 
  </Box>
);
};

export default KeyHighlights;
