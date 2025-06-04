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
    <Box borderRadius="md" p={{ base: 4, lg: 4 }} maxW="900px" mx={{ base: "50px", lg: "280px" }} height={{ base: "50px", lg: "100px" }}>
      <Flex
        align="center"
        border="1px solid"
        borderColor="gray.200"
        borderRadius="2px"
        overflow="hidden"
        bg="white"
        height={{ base: "40px", lg: "60px" }}
        boxShadow="md"
        p={{ base: 2, md: 0 }}
      >
       
        <InputGroup flex="1" >
          <InputLeftElement pointerEvents="none">
            <Icon as={SearchIcon} color="gray.400" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search...."
            border="none"
            _focus={{ outline: "none", boxShadow: "none" }}
             fontSize={{ base: 'sm', md: 'md' }}
            py={{ base: 2, md: 0 }}   
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
             fontSize={{ base: 'sm', md: 'md' }}
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
