import { Box, Flex, Text,Image ,Divider} from '@chakra-ui/react';
import GuidelineCard from '../Homepage/GuidelineCard';
import mostlyViewed from '../../Helper/Data/mostlyViewed';



const MostlyViewed = () => {
  return (
    <Box  my={10}>

        <Flex ml="60px" mt="60px"gap="20px" align="center">
            <Image src="..\assets\eye.webp" alt="eye Logo" width="50px" height="50px"/>

            <Text fontSize="2xl" fontWeight="bold" fontFamily="'Noto Sans', sans-serif" color="#0E5674">Mostly Viewed</Text>
        </Flex>
        <Divider borderColor="#000000" mt="20px" mx="20px" ml="67px"  height="1px" width="1265.01px"/>
    
     <Flex justify="flex-start" px={16} gap={6}>
        {mostlyViewed.map((item, index) => (
          <GuidelineCard
            key={index}
            title={item.title}
            authors={item.authors}
            source={item.source}
            date={item.date}
            image={item.image}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default MostlyViewed;