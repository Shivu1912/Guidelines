import {
  Box,
  InputGroup,
  Input,
  InputLeftElement,
  Icon,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
} from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";

const SearchBar= () =>  {
  return (
    <Box borderRadius="md" p={{ base: 4,  md: 4 }} maxW="900px" mx={{ base: "30px", lg: "280px" }} height={{ base: "50px", md: "100px" }}>
      <Flex
        align="center"
        border="1px solid"
        borderColor="gray.200"
        borderRadius="2px"
        overflow="hidden"
        bg="white"
        height={{ base: "30px",  md: "60px" }}
        boxShadow="md"
      >
       
        <InputGroup flex="1"  >
          <InputLeftElement  >
            <Icon as={SearchIcon} color="gray.400"  boxSize={{ base: 3, md: 6 }}/>
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search...."
            pl={{ base: '30px', md: "40px" }}
            border="none"
            _focus={{ outline: "none", boxShadow: "none" }}
             fontSize={{ base: '10px', md: 'lg' }}
            
          />
        </InputGroup>

        <Divider orientation="vertical" height="30px"  mx={{ base: 0, md: 2 }}/>

        <Menu>
          <MenuButton
            as={Button}
            variant="ghost"
            fontWeight="bold"
            rightIcon={<ChevronDownIcon />}
            _hover={{ bg: "transparent" }}
            fontFamily="Inter"
             fontSize={{ base: 'xs', md: 'lg' }}
          >
            Guidelines
          </MenuButton>
          <MenuList>
            <MenuItem>Guidelines</MenuItem>
          
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
}

export default SearchBar;
