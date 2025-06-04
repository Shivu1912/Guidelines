
import React from 'react';
import { Box, Flex, Image, InputGroup, InputLeftElement, Input, Divider, Button, Menu, MenuButton, Avatar,MenuList, MenuItem, Icon } from '@chakra-ui/react';
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";

export const SearchHeader = () => {

  return (

    <Box h= "100px"  bg="#D7F3FF4D">
 
    <Flex align="center" h="100px" px={2} justifyContent="space-between">
   
    <Image src="../assets/GC.webp" alt="GC Logo" width={{ base: "80px", lg: "150px" }} height={{ base: "50px", lg: "70px" }} />

    <Box px={4} py={2} borderRadius="md" w={{ base: "700px", lg: "900px" }}>
      <Flex
        direction={{ base: 'row', md: 'row' }}
        align="center"
        border="1px solid"
        borderColor="gray.200"
        borderRadius="md"
        bg="white"
        height={{ base: "30px", lg: "40px" }}
        boxShadow="md"
        
      >
        <InputGroup flex="1" >
          <InputLeftElement>
            <Icon as={SearchIcon} color="gray.400" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search..."
            border="none"
            _focus={{ outline: "none", boxShadow: "none" }}
            fontSize={{ base: 'sm', md: 'md' }}
          />
        </InputGroup>

        <Divider orientation="vertical" height="30px"   mx={{ base: 0, md: 2 }}/>

        <Menu>
          <MenuButton
            as={Button}
            variant="ghost"
            fontWeight="bold"
            rightIcon={<ChevronDownIcon />}
            _hover={{ bg: "transparent" }}
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
   
    <Avatar size={{ base: 'md', lg: 'lg' }} src="../assets/user.webp" />
  </Flex>
</Box>
  );
};

export default SearchHeader;
