import { Box, Flex, Text,Image ,Divider,HStack, Heading,Tag,MenuList,MenuItem,MenuButton,Menu,Button} from '@chakra-ui/react';
import allGuidelines from '../../Helper/Data/allGuidelines';
import {ChevronDownIcon } from "@chakra-ui/icons";


const  AllGuidelines= () => {
  return (
    <Box  my={10}>

        <Flex ml="60px" mt="60px"gap="20px" align="center">
            <Image src="..\assets\book.webp" alt="book Logo" width="50px" height="50px"/>

            <Text fontSize="2xl" fontWeight="bold" fontFamily="'Noto Sans', sans-serif" color="#0E5674">All Guidelines</Text>
        </Flex>
        <Divider borderColor="#000000" mt="10px" mx="20px" ml="67px"  height="1px" width="1265.01px"/>


         
        <Box mt={4} ml="60px">
        <HStack justify="space-between">
          <HStack>
           <Button bg="#0E5674" color="white" _hover={{ bg: "#0a3f59" }} size="sm">All</Button>
            
           <Menu>
                    <MenuButton
                      as={Button}
                      variant="ghost"
                      rightIcon={<ChevronDownIcon />}
                      border="1px solid black"
                      borderRadius="md"
                      bg="white"
                      color="black"
                      size="sm"
                    _hover={{ bg: "gray.100" }}
                    >
                     Organisation
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Organisation</MenuItem>
                    
                    </MenuList>
                    </Menu>
                    <Menu>
                      <MenuButton
                        as={Button}
                        variant="ghost"
                        rightIcon={<ChevronDownIcon />}
                        border="1px solid black"
                        borderRadius="md"
                        bg="white"
                        color="black"
                        size="sm"
                        _hover={{ bg: "gray.100" }}
                      >
                      Speciality
                      </MenuButton>
                      <MenuList>
                        <MenuItem>Speciality</MenuItem>
                      
                      </MenuList>
                    </Menu>
          </HStack>
        </HStack>

        

        {allGuidelines.map((g, idx) => (
          <Box key={idx} mb={6} mt={6}>
            <Heading fontWeight="bold" size="md" color="#0E5674" mb={1}>{g.source}</Heading>
            <Text fontSize="md" color="#303030">{g.date}</Text>
            <Heading size="md" mt={2}>{g.title}</Heading>
            <Text fontSize="md" mt={2} color="#303030">{g.authors}</Text>
            <Text fontSize="md" mt={2} color="#303030"  fontStyle="italic" isTruncated>{g.url}</Text>
          </Box>
        ))}
      </Box>
      <Divider borderColor="#000000" mt="10px" mx="20px" ml="67px"  height="1px" width="1265.01px"/>
    </Box>
  );
};

export default AllGuidelines;