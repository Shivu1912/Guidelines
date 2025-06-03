
import { Box, Heading } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import keyHighlightsContent from '../../Helper/Data/keyHighlightsContent.json';



const KeyHighlights = () => (
   <Box bg="#D7F3FF4D" mx={{ base: 4,lg: 6 }} my={{ base: 4, lg: 6 }}  px={{ base: 6, lg: 4 }}  py={{ base: 2, lg: 4}}
    borderRadius="md" >
    <Heading size={{ base: 'sm', lg: 'md' }} pl={{ base: 2,lg: 6 }}pt={4} color="#0E5674">📑 Key Highlights</Heading>
    <Box  mx={{ base: 4, lg: 10 }} my={{ base: 4, lg: 6 }} pl={{ base: 2,lg: 8 }} fontSize={{base: "md", lg: "lg"}}> 
    <ReactMarkdown
        components={{
          li: ({ children }) => <li style={{ marginBottom: '4px', fontFamily: 'Inter' }}>{children}</li>
        }}
      >
        {keyHighlightsContent?.keyHighlights?.map((item, idx) => `${idx + 1}. ${item}`).join('\n')}
      </ReactMarkdown>
    </Box> 
  </Box>
);

export default KeyHighlights;
