import { Box, Text,Flex, Image} from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';



const markdownContent = `
1. The guideline panel made 7 recommendations, including the use of fecal microbiota-based therapies in specific scenarios such as recurrent C difficile infection and severe or fulminant cases not responding to standard antibiotics.
2. Recommendations vary based on the immunocompetence of patients, suggesting select use of therapies in certain populations and against their use in severely immunocompromised individuals.
3. While fecal microbiota-based therapies are effective for preventing recurrent C difficile in select patients, they are not yet recommended for other gastrointestinal conditions except within the context of clinical trials.
`;

const WatchSection = () => (
<Box my={6}>
     
      <Flex ml={{ base: 10, lg: "67px" }} mt="60px"gap="10px" align="center">
        <Image src="../assets/watch.webp" alt="New Logo" boxSize={{ base: "20px", lg: "40px" }} />
        <Text
          fontSize={{ base: "xl", lg: "2xl" }}
          fontWeight="bold"
          fontFamily="'Noto Sans', sans-serif"
          color="#0E5674"
        >
          Watch Now
        </Text>
      </Flex>

      <Box mt={{ base: 4, lg: 8 }}> <Image src="../assets/video.webp" alt="New Logo" pl={{ base: "60px", lg: "70px" }} w={{ base: "300px", lg: "800px" }} h={{ base: "150px", lg: "400px" }}/></Box>

       <Flex ml={{ base: 10, lg: "67px" }} mt="30px"gap="10px" align="center">
        <Image src="../assets/que.webp" alt="New Logo" boxSize={{ base: "20px", lg: "30px" }} />
        <Text
          fontSize={{ base: "lg", lg: "xl" }}
          fontWeight="bold"
          fontFamily="'Noto Sans', sans-serif"
          color="#0E5674"
        >
          What Changed?
        </Text>
      </Flex>
       <Box  mx={{ base: "70px", lg: "120px" }} my={{ base: 2, lg: 4 }} fontSize={{base: "md", lg: "lg"}}> 
          <ReactMarkdown  components={{
            li: ({ children }) => <li style={{ marginBottom: '4px', fontFamily:'Inter'}}>{children}</li>
          }}>
            {markdownContent}
          </ReactMarkdown>
          </Box> 
 </Box>     
);
 export default WatchSection;