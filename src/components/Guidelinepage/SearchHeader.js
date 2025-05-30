// src/components/layout/Header.js
import React from 'react';
import { Box, Flex, Image, InputGroup, InputLeftElement, Input, Divider, Button, Menu, MenuButton, MenuList, MenuItem, Icon } from '@chakra-ui/react';
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";

export const SearchHeader = () => {

  return (

    <Box h="100px" bg="#D7F3FF4D">
 
    <Flex  align="center" h="100px" px={4}>
   
    <Image src="../assets/GC.webp" alt="GC Logo" width="150px" height="70px" />

    <Box p={4} borderRadius="md" maxW="900px">
      <Flex
        align="center"
        border="1px solid"
        borderColor="gray.200"
        borderRadius="md"
        overflow="hidden"
        bg="white"
        height="40px"
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

        <Divider orientation="vertical" height="30px" mx={2} />

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
  </Flex>
</Box>
  );
};

export default SearchHeader;
