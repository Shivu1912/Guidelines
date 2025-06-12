import {
  Box,
  Image,
  Text,
  Flex,
  Textarea,
  Avatar,
  Button,
  Stack,
  Spinner,
  HStack,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Title from "../common/Title";



const CommentBar = ({ data }) => {
  const initialComments = data?.comments || [];
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 3;



  const totalPages = Math.ceil(comments.length / commentsPerPage);
  const startIndex = (currentPage - 1) * commentsPerPage;
  const currentComments = comments.slice(startIndex, startIndex + commentsPerPage);

  const handlePostComment = () => {
    if (newComment.trim() === "") return;

    const newCommentObj = {
      name: "You",
      text: newComment,
      time: "just now",
      avatar: "/assets/user1.webp",
    };

    setComments([newCommentObj, ...comments]);
    setNewComment("");
    setCurrentPage(1); 
  };
  




  return (
    <Box mb={6}>
      <Title src="/assets/msg.webp" title="Discussion" />

      <Flex
        align="flex-start"
        gap={{ base: 4, lg: 6 }}
        my={{ base: 4, lg: 6 }}
        ml={{ base: 10, lg: "75px" }}
        w={{ base: "350px", lg: "1000px" }}
        wrap="wrap"
      >
        <Avatar
          size={{ base: "md", lg: "lg" }}
          src="/assets/user1.webp"
        />
        <Box flex="1" position="relative" w={{ base: "100px", lg: "200px" }}>
          <Textarea
            placeholder="Write your comment..."
            resize="none"
            h={{ base: "120px", lg: "200px" }}
            w={{ base: "280px", lg: "920px" }}
            borderColor="gray.300"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <Button
            position="absolute"
            bottom="12px"
            right={{ base: "20px", lg: "12px" }}
            size={{ base: "xs", lg: "sm" }}
            bg="#0E5674"
            color="white"
            onClick={handlePostComment}
          >
            Post Comment
          </Button>
        </Box>
      </Flex>

      <Box mx={{ base: "70px", lg: "170px" }}>
        <Text fontWeight="bold" color="#0E5674" fontSize={{ base: "md", lg: "lg" }}>
          Previous comments
        </Text>

        <Stack spacing={6} mt={{ base: 1, lg: 4 }}>
          {currentComments.map((comment, index) => (
            <Flex key={index} w={{ base: "300px", lg: "700px" }} gap={4} align="flex-start">
              <Avatar size={{ base: "sm", lg: "md" }} mt={{ base: 2, lg: 4 }} src={comment.avatar} />
              <Box
                bg="#D9D9D966"
                px={{ base: 2, lg: 4 }}
                mt={4}
                h={{ base: "90px", lg: "95px" }}
                py={2}
                borderRadius="md"
                flex="1"
              >
                <Text fontWeight="bold" fontSize={{ base: "sm", lg: "md" }}>
                  {comment.name}
                </Text>
                <Text fontSize={{ base: "xs", lg: "sm" }} mt={1}>
                  {comment.text}
                </Text>
                <Flex mt={{ base: 2, lg: 5}}  gap={{ base: 2, lg: 4 }} fontSize={{ base: "xs", lg: "sm" }} color="#000000">
                  <Text>{comment.time}</Text>
                  <Text cursor="pointer">Like</Text>
                  <Text cursor="pointer">Reply</Text>
                </Flex>
              </Box>
            </Flex>
          ))}
        </Stack>

         {totalPages > 1 && (
          <HStack justify="center" mt={8}>
            <Button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              isDisabled={currentPage === 1}
              size="sm"
            >
              Previous
            </Button>
            
            <Button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              isDisabled={currentPage === totalPages}
              size="sm"
            >
              Next
            </Button>
          </HStack>
        )}
      </Box>
    </Box>
  );
};

export default CommentBar;