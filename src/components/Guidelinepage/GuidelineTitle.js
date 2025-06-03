import { Box, Heading, Text,Button,  Stack } from '@chakra-ui/react';

const GuidelineTitle = () => (
  <Box mx={{ base: 4,lg: 6 }} my={{ base: 4, lg: 6 }} >
    <Stack spacing={2}>
      <Heading size="lg"  fontStyle="Inter">
        AGA Clinical Practice Guideline on Fecal Microbiota–Based Therapies for Select Gastrointestinal Diseases
      </Heading>
      <Stack
  direction="row"
  flexWrap="wrap"
  gap={2}
  spacing={2}
>
  <Button
    borderRadius="md"
    bg="#EDECEC"
    color="#0E5674"
    size={{ base: "xs", lg: "sm" }}
    _hover={{ bg: "gray.100" }}
    fontFamily="Inter"
    fontSize={{ base: "xs", md: "sm" }}
    whiteSpace="normal" // allow wrapping inside button
    maxW={{ base: "45%", sm: "auto" }} // keeps buttons compact on small screens
  >
    Irritable bowel syndrome
  </Button>

  <Button
    borderRadius="md"
    bg="#EDECEC"
    color="#0E5674"
    size={{ base: "xs", lg: "sm" }}
    _hover={{ bg: "gray.100" }}
    fontFamily="Inter"
    fontSize={{ base: "xs", md: "sm" }}
    whiteSpace="normal"
    maxW={{ base: "45%", sm: "auto" }}
  >
    Fecal microbiota
  </Button>

  <Button
    borderRadius="md"
    bg="#EDECEC"
    color="#0E5674"
    size={{ base: "xs", lg: "sm" }}
    _hover={{ bg: "gray.100" }}
    fontFamily="Inter"
    fontSize={{ base: "xs", md: "sm" }}
    whiteSpace="normal"
    maxW={{ base: "45%", sm: "auto" }}
  >
    Clostridioides difficile
  </Button>

  <Button
    borderRadius="md"
    bg="#EDECEC"
    color="#0E5674"
    size={{ base: "xs", lg: "sm" }}
    _hover={{ bg: "gray.100" }}
    fontFamily="Inter"
    fontSize={{ base: "xs", md: "sm" }}
    whiteSpace="normal"
    maxW={{ base: "45%", sm: "auto" }}
  >
    Chronic Diseases
  </Button>
</Stack>

      <Text fontSize={{ base:"sm",lg: "md" }} fontStyle="Inter">
        Published by <b>American Gastroenterological Association</b> on <b> 6th March, 2024</b> 
      </Text>
      <Text fontSize={{ base:"sm",lg: "md" }}  fontStyle="Inter">
       Authors: Anne F Peery , Colleen R Kelly , Dina Kao , Byron P Vaughn , Benjamin Lebwohl , Siddharth Singh ,
        Aamer Imdad , Osama Altayar
      </Text>

      <Text  fontSize={{ base:"sm",lg: "md" }}  fontStyle="Inter">Reviewed by Dr. Kamal Sharma, Senior Interventional Cardiologist, SAL Hospital</Text>
      
      <Stack direction="row" flexDirection="space-between" gap={5} >
        <Text fontSize="md" color="#000000">👁️ 1220 views </Text>
        <Text fontSize="md" color="#000000"> 📄 Bookmark</Text>
    </Stack>
    </Stack>
   </Box>
);

export default GuidelineTitle;