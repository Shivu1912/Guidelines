import { Flex, Image, Text } from '@chakra-ui/react';

const Title = ({ src, title }) => {
  return (
    <Flex ml={{ base: 4, md: "67px" }} mt={{ base: 2, md: "30px" }} gap="10px" align="center">
      <Image src={src} alt="Section Icon" boxSize={{ base: "25px", md: "50px" }} />
      <Text
        fontSize={{ base: "lg", md: "2xl" }}
        fontWeight="bold"
        color="#0E5674"
      >
        {title}
      </Text>
    </Flex>
  );
};

export default Title;





