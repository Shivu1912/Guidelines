import { Box, Heading, Text, Flex, Image } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import Title from '../common/Title';

const KeyHighlights = ({ data }) => {
  if (!data) {
    return <Text ml={4}>Loading or guideline not found.</Text>;
  }

  const { keyHighlights } = data;

  return (
    <Box bg="#D7F3FF4D" m={{ base: 4, md: 6 }} p={{ base: 2,md: 4 }} borderRadius="md">

  
      <Flex pl={{ base: 2, md: 4 }} pt={{ base: 1, md: 2 }} gap="10px" align="center">
        <Image src="/assets/watch.webp" alt="Watch Icon" boxSize={{ base: "25px", md: "35px" }} />
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="bold"
          color="#0E5674"
        >
          Key Highlights
        </Text>
      </Flex>

      <Box mx={{ base: 8, md: 6 }} my={{ base: 2, md: 4 }} pl={{ base: 2, md: 8 }} fontSize={{ base: "md",md: "xl" }}>
        <ReactMarkdown
          components={{
            li: ({ children }) => (
              <li style={{ marginBottom: '4px'}}>{children}</li>
            ),
          }}
        >
          {keyHighlights.map((item, idx) => `${idx + 1}. ${item}`).join('\n')}
        </ReactMarkdown>
      </Box>
    </Box>
  );
};

export default KeyHighlights;
