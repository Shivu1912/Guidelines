import { Box, Text,Flex, Image} from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';



const WatchSection = ({ data }) => {
  if (!data || !data.watchSection) {
    return <Text ml={4}>Loading or guideline not found.</Text>;
  }

  const { videoImage, changeData } = data.watchSection;


return (
<Box my={6}>
     
      <Flex ml={{ base: 6, md: "67px" }} mt={{ base: "30px", md: "60px" }}gap="10px" align="center">
        <Image src="../assets/watch.webp" alt="New Logo" boxSize={{ base: "20px", md: "40px" }} />
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          fontFamily="'Noto Sans', sans-serif"
          color="#0E5674"
        >
          Watch Now
        </Text>
      </Flex>

      <Box mt={{ base: 4, md: 6 }}> <Image src={videoImage}  alt="Video" pl={{ base: "50px", md: "100px" }} w={{ base: "300px", md: "800px" }} h={{ base: "150px", lg: "400px" }}/></Box>

       <Flex ml={{ base: 6, md: "67px" }} mt="30px"gap="10px" align="center">
        <Image src="../assets/que.webp" alt="New Logo" boxSize={{ base: "20px", md: "30px" }} />
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="bold"
          fontFamily="'Noto Sans', sans-serif"
          color="#0E5674"
        >
          What Changed?
        </Text>
      </Flex>
       <Box  mx={{ base: "50px",md: "120px" }} my={{ base: 2,md: 4 }} fontSize={{base: "md", md: "xl"}}> 
          <ReactMarkdown  components={{
            li: ({ children }) => <li style={{ marginBottom: '4px', fontFamily:'Inter'}}>{children}</li>
          }}>
           {changeData.map((item, idx) => `${idx + 1}. ${item}`).join('\n')}
          </ReactMarkdown>
          </Box> 
 </Box>     
);
};
 export default WatchSection;