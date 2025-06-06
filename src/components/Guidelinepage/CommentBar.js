import { Box, Image, Text, Flex, Textarea, Avatar, Button, Stack } from '@chakra-ui/react';

const CommentBar = ({ data }) => {
  const comments = data?.comments || [];


  return (
 <Box mb={6}>
       <Flex ml={{ base: 6, lg: "67px" }} mt={{ base: 2, md: "30px" }}gap="10px" align="center">
        <Image src="../assets/msg.webp" alt="New Logo" boxSize={{ base: "20px", lg: "30px" }} />
        <Text
          fontSize={{ base: "lg", lg: "xl" }}
          fontWeight="bold"
          fontFamily="'Noto Sans', sans-serif"
          color="#0E5674"
        >
        Discussion (3)
        </Text>
      </Flex>

     <Flex align="flex-start" gap={{ base: 4, lg: 6 }} my={{ base: 4, lg: 6 }} ml={{ base: 10, lg: "75px" }}   w={{ base: "350px", lg: "1000px" }} wrap="wrap">
        <Avatar size={{ base: "md", lg: "lg" }}  src="../assets/user1.webp" />
        <Box flex="1" position="relative" w={{ base: "100px", lg: "200px" }}>
          <Textarea
          placeholder="Write your comment..."
          resize="none" 
          h={{ base: "120px", lg: "200px" }} 
          w={{ base: "280px", lg: "920px" }}
          borderColor="gray.300"
        
      />
          <Button
            position="absolute"
            bottom="12px"
            right={{ base: "20px", lg: "12px" }} 
            size={{ base: "xs", lg: "sm" }}
            bg="#0E5674"
            color="white"
          >
            Post Comment
          </Button>
        </Box>
      </Flex>
       
      <Box mx={{ base: "70px", lg: "170px" }}>
      <Text fontWeight="bold"  color="#0E5674"  fontSize={{ base: "md", lg: "lg" }}>
        Previous comments
      </Text>
       
      <Stack spacing={6} mt={{ base: 1, lg: 4 }} >
        {comments.map((comment, index) => (
          <Flex   w={{ base: "300px", lg: "700px" }}  key={index} gap={4} align="flex-start">
            <Avatar size={{ base: "sm", lg: "md" }}  mt={{ base: 2, lg: 4 }} src={comment.avatar} />
            <Box  bg="#D9D9D966" px={{ base: 2, lg: 4 }}  mt={4} h={{ base: "90px", lg: "95px" }}  py={2} borderRadius="md" flex="1">
              <Text fontWeight="bold" fontSize={{ base: "sm", lg: "md" }}>{comment.name}</Text>
              <Text fontSize={{ base: "xs", lg: "sm" }} mt={1}>{comment.text}</Text>
              <Flex mt={{ base: 2, lg: 4 }} gap={{ base: 2, lg: 4 }} fontSize={{ base: "xs", lg: "sm" }} color="#000000">
                <Text>{comment.time}</Text>
                <Text cursor="pointer">Like</Text>
                <Text cursor="pointer">Reply</Text>
              </Flex>
            </Box>
          </Flex>
        ))}
      </Stack>
       
       <Text fontWeight="bold"  color="#0E5674" mt={8}  fontSize={{ base: "md", lg: "lg" }} textDecoration="underline">
        View all comments
      </Text>
      
      </Box>  
</Box>
);
 }
export default CommentBar;