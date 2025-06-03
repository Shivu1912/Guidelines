
import { Box, Table, Thead, Tbody, Tr, Th, Td, Text,Flex,Image } from '@chakra-ui/react';
import guidelineData from '../../Helper/Data/contemporaryData.json';


const ContemporaryData = () => {
    const { rowLabels, strongRecommendation, conditionalRecommendation } = guidelineData;

  return (
    <Box  mt={6}>
       <Flex ml={{ base: 10, lg: "67px" }} mt="30px"gap="10px" align="center">
        <Image src="../assets/compare.webp" alt="New Logo" boxSize={{ base: "20px", lg: "30px" }} />
        <Text
          fontSize={{ base: "lg", lg: "xl" }}
          fontWeight="bold"
          fontFamily="'Noto Sans', sans-serif"
          color="#0E5674"
        >
          Contemporary Guidelines
        </Text>
      </Flex>

      <Box  h={{ base: "auto", lg: "650px" }} w={{ base: "500px", lg: "800px" }} mx={{ base: 10, lg: "100px" }} my={{ base: 6, lg: 10 }}border="4px solid #CDECF1">
     
      <Table variant="simple" minWidth="400px" >
        <Thead bg="#CDECF1">
          <Tr>
            <Th textAlign="center" color="black.500">Implication For:</Th>
            <Th textAlign="center" color="black.500">Strong Recommendation (S)</Th>
            <Th textAlign="center" color="black.500">Conditional Recommendation (C)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {rowLabels.map((label, idx) => (
            <Tr key={label}>
              <Td fontWeight="bold">{label}</Td>
              <Td>{strongRecommendation[idx]}</Td>
              <Td>{conditionalRecommendation[idx]}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Box mt={4}  p={4} bg="gray.50">
        <Text fontWeight="bold"  bg="#CDECF1" mb={2}>Certainty in the Evidence</Text>
        <Text><b>High: H </b>&nbsp;&nbsp; <b>Moderate: M </b>&nbsp;&nbsp; <b>Low: L</b> &nbsp;&nbsp; <b>Very Low: VL</b></Text>
        <Text fontSize="sm" color="gray.600" mt={2}>
          Source: Grading of Recommendations Assessment, Development and Evaluation Working Group
          <br />
          (Schunemann HJ et al. <i>Am J Respir Crit Care Med.</i> 2006;174:605-14. Guyatt GH et al. <i>BMJ</i> 2008;336:924–6)
        </Text>
      </Box>
      </Box>
    </Box>
  );
};

export default ContemporaryData;
