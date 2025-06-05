import React from 'react';
import { Box, Flex, keyframes } from '@chakra-ui/react';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = () => {
  return (
    <Flex
      height="730px"
      justify="center"
      align="center"
      bg="white"
      w="100%"
    >
      <Box
        w="60px"
        h="60px"
        border="6px solid black"
        borderTop="#0E5673"
        borderRadius="50%"
        animation={`${spin} 1s linear infinite`}
      />
    </Flex>
  );
};

export default Loader;

