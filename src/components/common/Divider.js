import { Divider } from '@chakra-ui/react';

const DividerSection = () => {
  return (
    <Divider
      borderColor="#000000"
      mt="10px"
      ml={{ base: 4, md: "67px" }}
      height="1px"
      width={{ base: "90%", md: "95%" }}
    />
  );
};

export default DividerSection;
