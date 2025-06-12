
import { Box, Table, Thead, Tbody, Tr, Th, Td, Text,Flex,Image } from '@chakra-ui/react';
import Title from '../common/Title';



const ContemporaryData = ({ data }) => {
  if (!data?.contemporaryData) {
    return <Text ml={4}>Contemporary data not available.</Text>;
  }

  const {
    rowLabels,
    strongRecommendation,
    conditionalRecommendation,
  } = data.contemporaryData;


  return (
    <Box  mt={6}>

      <Title src="../assets/compare.webp" title="Contemporary Guidelines" />
   

      <Box h={{ base: "auto", md: "570px" }} w={{ base: "350px",  md: "800px" }} mx={{ base: 10,  md: "100px" }} my={{ base: 4,  md: 8 }}  border="4px solid #CDECF1">

    <Box overflowX="auto">
  <Table variant="simple" minW="600px">
    <Thead bg="#CDECF1">
      <Tr>
      <Th
        textAlign="center"
        color="black.500"
        fontSize={{ base: "xs", md: "md" }}
        px={{ base: 2, md: 4 }}
        py={{ base: 1, md: 2 }}
      >
        Implication For:
      </Th>
      <Th
        textAlign="center"
        color="black.500"
        fontSize={{ base: "xs", md: "md" }}
        px={{ base: 2, md: 4 }}
        py={{ base: 1, md: 2 }}
      >
        Strong Recommendation (S)
      </Th>
      <Th
        textAlign="center"
        color="black.500"
        fontSize={{ base: "xs", md: "md" }}
        px={{ base: 2, md: 4 }}
        py={{ base: 1, md: 2 }}
      >
        Conditional Recommendation (C)
      </Th>
    </Tr>
    </Thead>
    <Tbody>
      {rowLabels.map((label, idx) => (
             <Tr key={label}>
        <Td
          fontWeight="bold"
          fontSize={{ base: "xs", md: "sm", lg: "md" }}
          px={{ base: 2, md: 4 }}
          py={{ base: 1, md: 2 }}
        >
          {label}
        </Td>
        <Td
          fontSize={{ base: "xs", md: "sm", lg: "md" }}
          px={{ base: 2, md: 4 }}
          py={{ base: 2, md: 2 }}
        >
          {strongRecommendation[idx]}
        </Td>
        <Td
          fontSize={{ base: "xs", md: "sm", lg: "md" }}
          px={{ base: 2, md: 4 }}
          py={{ base: 1, md: 2 }}
        >
          {conditionalRecommendation[idx]}
        </Td>
      </Tr>
      ))}
    </Tbody>
  </Table>
</Box>

      

      <Box mt={{ base: 2, md: 4 }} p={{ base: 2, md: 4 }} bg="gray.50">
        <Text fontWeight="bold"  bg="#CDECF1" p={1} mb={2}>Certainty in the Evidence</Text>
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
