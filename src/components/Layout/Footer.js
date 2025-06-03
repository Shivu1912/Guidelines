
import { Box, Text } from '@chakra-ui/react';

const Footer = ({ id }) => {
  return (
    <Box bg="#0E5673" color="white" py={4} textAlign="center">
      <Text fontSize="sm">
        Guideline ID: {id} — © 2025 MedFlix Guidelines. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
