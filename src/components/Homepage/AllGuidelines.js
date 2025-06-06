import { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Image,
  Divider,
  HStack,
  Heading,
  Link,
  MenuList,
  MenuItem,
  MenuButton,
  Menu,
  Button
} from '@chakra-ui/react';

import { ChevronDownIcon } from "@chakra-ui/icons";

const AllGuidelines = ({ data }) => {
  if (!data || data.length === 0) return null;


  const [guidelines, setGuidelines] = useState([]);
  const [filterType, setFilterType] = useState('All');
  const [filterValue, setFilterValue] = useState(null);

  useEffect(() => {
    setGuidelines(data);
  }, [data]);

  
  const organisations = [...new Set(data.map(item => item.organization))];
  const specialities = [...new Set(data.map(item => item.speciality))];

  const filteredGuidelines = guidelines.filter(g => {
    if (filterType === 'All') return true;
    if (filterType === 'Organization') return g.organization === filterValue;
    if (filterType === 'Speciality') return g.speciality === filterValue;
    return true;
  });

  return (
    <Box my={2}>
      <Flex ml={{ base: 4, md: "67px" }}  mt={{ base: 2,  md: "30px" }}gap="10px" align="center">
        <Image src="../assets/book.webp" alt="book Logo" boxSize={{ base: "25px",  md: "50px" }} />
        <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold" fontFamily="'Noto Sans', sans-serif" color="#0E5674">All Guidelines</Text>
      </Flex>

      <Divider borderColor="#000000" mt="10px" ml={{ base: 4, md: "67px" }} height="1px" width={{ base: "90%", md: "95%" }} />

      <Box  mt={{ base: 2,  md: 6 }} pl={{ base: 4, md: 16 }}>
       <HStack spacing={4}>
  <Button
    bg={filterType === 'All' ? "#0E5674" : "white"}
    color={filterType === 'All' ? "white" : "black"}
    border="1px solid black"
    _hover={{ bg: "#0a3f59", color: "white" }}
    fontFamily="Circular Std"
    size={{ base: "xs",  md: "md" }}
    onClick={() => {
      setFilterType('All');
      setFilterValue(null);
    }}
  >
    All
  </Button>

  <Menu>
    <MenuButton
      as={Button}
      rightIcon={<ChevronDownIcon />}
      border="1px solid black"
      borderRadius="md"
      bg={filterType === 'Organization' ? "#0E5674" : "white"}
      color={filterType === 'Organization' ? "white" : "black"}
       size={{ base: "xs", md: "md" }}
      _hover={{ bg: "#0a3f59", color: "white" }}
      fontFamily="Circular Std"
    >
      {filterType === 'Organization' && filterValue ? filterValue : "Organisation"}
    </MenuButton>
    <MenuList>
      {organisations.map((org, idx) => (
        <MenuItem
          key={idx}
          onClick={() => {
            setFilterType('Organization');
            setFilterValue(org);
          }}
        >
          {org}
        </MenuItem>
      ))}
    </MenuList>
  </Menu>

  <Menu>
    <MenuButton
      as={Button}
      rightIcon={<ChevronDownIcon />}
      border="1px solid black"
      borderRadius="md"
      bg={filterType === 'Speciality' ? "#0E5674" : "white"}
      color={filterType === 'Speciality' ? "white" : "black"}
       size={{ base: "xs",  md: "md" }}
      _hover={{ bg: "#0a3f59", color: "white" }}
      fontFamily="Circular Std"
    >
      {filterType === 'Speciality' && filterValue ? filterValue : "Speciality"}
    </MenuButton>
    <MenuList>
      {specialities.map((spec, idx) => (
        <MenuItem
          key={idx}
          onClick={() => {
            setFilterType('Speciality');
            setFilterValue(spec);
          }}
        >
          {spec}
        </MenuItem>
      ))}
    </MenuList>
  </Menu>
</HStack>

        {filteredGuidelines.map((g, idx) => (
          <Box key={idx} mb={{ base: 4,  md: 6 }}  mt={{ base: 2,  md: 6 }}>
            <Heading fontWeight="bold" size={{ base: "sm", md: "md" }} fontFamily="Noto Sans" color="#0E5674" mb={1}>
              {g.source}
            </Heading>
            <Text fontSize={{ base: "xs",  md: "md" }} color="#303030">{g.date}</Text>
            <Heading size={{ base: "xs",  md: "md" }}  mt={{ base: 0,  md: 2 }}>{g.title}</Heading>
            <Text fontSize={{ base: "xs",  md: "md" }} mt={{ base: 0,  md: 2 }} color="#303030">{g.authors}</Text>
            <Link href={g.url} isExternal fontStyle="italic"  color="#303030" fontSize={{ base: "sm", md: "md" }}>
              {g.url}
            </Link>
          </Box>
        ))}
      </Box>

      <Divider borderColor="#000000" mt="10px" ml={{ base: 4,  md: "67px" }} height="1px" width={{ base: "90%", md: "95%" }} />
    </Box>
  );
};

export default AllGuidelines;
