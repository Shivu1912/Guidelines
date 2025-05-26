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
    <Box p={4} borderRadius="md"  maxW="900px" mx="auto" hight="100px">
      <Flex
        align="center"
        border="1px solid"
        borderColor="gray.200"
        borderRadius="2px"
        overflow="hidden"
        bg="white"
        height="60px"
        boxShadow="md"
      >
       
        <InputGroup flex="1">
          <InputLeftElement pointerEvents="none">
            <Icon as={SearchIcon} color="gray.400" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search guidelines title, organisation or condition..."
            border="none"
            _focus={{ outline: "none", boxShadow: "none" }}
          />
        </InputGroup>

        <Divider orientation="vertical" height="30px" mx={2}/>

        <Menu>
          <MenuButton
            as={Button}
            variant="ghost"
            fontWeight="bold"
            rightIcon={<ChevronDownIcon />}
            _hover={{ bg: "transparent" }}
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
