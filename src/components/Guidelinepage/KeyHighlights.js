import { Box, Heading, Text, Flex, Image } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';

const KeyHighlights = ({ data }) => {
  if (!data) {
    return <Text ml={4}>Loading or guideline not found.</Text>;
  }

  const { keyHighlights } = data;

  return (
    <Box
      bg="#D7F3FF4D"
      mx={{ base: 4, lg: 6 }}
      my={{ base: 4, lg: 6 }}
      px={{ base: 2, lg: 4 }}
      py={{ base: 2, lg: 4 }}
      borderRadius="md"
    >
      <Flex pl={{ base: 2, lg: 4 }} pt={{ base: 1, lg: 2 }} gap="10px" align="center">
        <Image src="/assets/watch.webp" alt="Watch Icon" boxSize={{ base: "10px", lg: "20px" }} />
        <Text
          fontSize={{ base: "sm", lg: "lg" }}
          fontWeight="bold"
          fontFamily="'Noto Sans', sans-serif"
          color="#0E5674"
        >
          Key Highlights
        </Text>
      </Flex>

      <Box mx={{ base: 4, lg: 6 }} my={{ base: 2, lg: 4 }} pl={{ base: 2, lg: 8 }} fontSize={{ base: "md", lg: "xl" }}>
        <ReactMarkdown
          components={{
            li: ({ children }) => (
              <li style={{ marginBottom: '4px', fontFamily: 'Inter' }}>{children}</li>
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
