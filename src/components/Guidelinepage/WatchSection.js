import { Box, Text,Flex, Image} from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import Title from '../common/Title';



const WatchSection = ({ data }) => {
  if (!data || !data.watchSection) {
    return <Text ml={4}>Loading or guideline not found.</Text>;
  }

  const { videoImage, changeData } = data.watchSection;


return (
<Box my={6}>
      
      <Title src="../assets/watch.webp" title="Watch Now" />
   
      <Box mt={{ base: 4, md: 6 }}> <Image src={videoImage}  alt="Video" pl={{ base: "50px", md: "100px" }} w={{ base: "300px", md: "800px" }} h={{ base: "150px", lg: "400px" }}/></Box>
       
        <Box pt={{ base: 4, md: 2}}>
        <Title src="../assets/que.webp" title="What Changed?" />
        </Box>

       <Box  mx={{ base: "50px",md: "120px" }} my={{ base: 2,md: 4 }} fontSize={{base: "md", md: "xl"}}> 
          <ReactMarkdown  components={{
            li: ({ children }) => <li style={{ marginBottom: '4px'}}>{children}</li>
          }}>
           {changeData.map((item, idx) => `${idx + 1}. ${item}`).join('\n')}
          </ReactMarkdown>
          </Box> 
 </Box>     
);
};
 export default WatchSection;