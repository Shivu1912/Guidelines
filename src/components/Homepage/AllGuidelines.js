import { useEffect, useState } from 'react';
import {
  Box,
  Text,
  HStack,
  Heading,
  Link,
  MenuList,
  MenuItem,
  MenuButton,
  Menu,
  Button
} from '@chakra-ui/react';
import Title from '../common/Title';
import Divider from '../common/Divider';
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useRouter } from 'next/router';

const AllGuidelines = ({ data }) => {
  if (!data || data.length === 0) return null;

  const [guidelines, setGuidelines] = useState([]);
  const [filterType, setFilterType] = useState('All');
  const [filterValue, setFilterValue] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const router = useRouter();
  
  const handleReadMore = (id) => {
    router.push(`/guideline/${id}`);
  };
  

  useEffect(() => {
    setGuidelines(data);
  }, [data]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filterType, filterValue]);

  const organisations = [...new Set(data.map(item => item.organization))];
  const specialities = [...new Set(data.map(item => item.speciality))];

  const filteredGuidelines = guidelines.filter(g => {
    if (filterType === 'All') return true;
    if (filterType === 'Organization') return g.organization === filterValue;
    if (filterType === 'Speciality') return g.speciality === filterValue;
    return true;
  });

  const totalPages = Math.ceil(filteredGuidelines.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const allguidelines = filteredGuidelines.slice(startIndex, endIndex);

  return (
    <Box my={2}>
      <Title src="../assets/book.webp" title="All Guidelines" />
      <Divider />

      <Box mt={{ base: 2, md: 6 }} pl={{ base: 4, md: 16 }}>
        <HStack spacing={4}>
          <Button
            bg={filterType === 'All' ? "#0E5674" : "white"}
            color={filterType === 'All' ? "white" : "black"}
            border="1px solid black"
            _hover={{ bg: "#0a3f59", color: "white" }}
            size={{ base: "xs", md: "md" }}
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
              size={{ base: "xs", md: "md" }}
              _hover={{ bg: "#0a3f59", color: "white" }}
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

        {allguidelines.map((g, idx) => (
          <Box key={idx} mb={{ base: 4, md: 6 }} mt={{ base: 2, md: 6 }}>
            <Heading fontWeight="bold" size={{ base: "sm", md: "md" }} color="#0E5674" mb={1}  onClick={() => handleReadMore(g.id)}>
              {g.source}
            </Heading>
            <Text fontSize={{ base: "xs", md: "md" }} color="#303030">{g.date}</Text>
            <Heading size={{ base: "xs", md: "md" }} mt={{ base: 0, md: 2 }}>{g.title}</Heading>
            <Text fontSize={{ base: "xs", md: "md" }} mt={{ base: 0, md: 2 }} color="#303030">{g.authors}</Text>
            <Link href={g.url} isExternal color="#303030" fontSize={{ base: "sm", md: "md" }}>
              {g.url}
            </Link>
          </Box>
        ))}

        <HStack justify="left" mt={6}>
          <Button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            isDisabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            isDisabled={currentPage === totalPages}
          >
            Next
          </Button>
        </HStack>
      </Box>

      <Divider />
    </Box>
  );
};

export default AllGuidelines;
