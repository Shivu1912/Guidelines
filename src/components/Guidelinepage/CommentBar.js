import {
  Box,
  Text,
  Flex,
  Textarea,
  Avatar,
  Button,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { useState,useEffect} from "react";
import Title from "../common/Title";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);

dayjs.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s",
    s: "just now",
    m: "1 minute ago",
    mm: "%d minutes ago",
    h: "1 hour ago",
    hh: "%d hours ago",
    d: "1 day ago",
    dd: "%d days ago",
    M: "1 month ago",
    MM: "%d months ago",
    y: "1 year ago",
    yy: "%d years ago",
  },
});

const CommentBar = ({ data }) => {
  const getInitialComments = () => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("comments");
      return stored ? JSON.parse(stored) : data?.comments || [];
    }
    return data?.comments || [];
  };

  const [comments, setComments] = useState(getInitialComments);
  const [newComment, setNewComment] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [tick, setTick] = useState(0);

  const commentsPerPage = 3;
  const totalPages = Math.ceil(comments.length / commentsPerPage);
  const startIndex = (currentPage - 1) * commentsPerPage;
  const currentComments = comments.slice(startIndex, startIndex + commentsPerPage);

  
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log('comments',comments);
      localStorage.setItem("comments", JSON.stringify(comments));
    }
  }, [comments]);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setTick((prev) => prev + 1);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const handlePostComment = () => {
    if (newComment.trim() === "") return;

    const newCommentObj = {
      name: "You",
      text: newComment,
      time: new Date().toISOString(),
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
            w={{ base: "260px", lg: "920px" }}
            borderColor="gray.300"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onClick={handlePostComment}
          />
          <Button
            position="absolute"
            bottom="12px"
            right={{ base: "30px", lg: "12px" }}
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

        <Stack spacing={2} mt={{ base: 1, lg: 4 }}>
          {currentComments.map((comment, index) => (
            <Flex key={index} w={{ base: "280px", lg: "700px" }} gap={4} align="flex-start">
              <Avatar size={{ base: "sm", lg: "md" }} mt={{ base: 4, lg: 4 }} src={comment.avatar} />
              <Flex flexDirection="column"  w="100%">
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
                
              </Box>
              <Flex mt={{ base: 1, lg: 2}}  gap={{ base: 2, lg: 4 }} fontSize={{ base: "xs", lg: "sm" }} color="#000000">
                 <Text>{dayjs(comment.time).fromNow()}</Text>
                  <Text cursor="pointer">Like</Text>
                  <Text cursor="pointer">Reply</Text>
                </Flex>
                </Flex>
            </Flex>
          ))}
        </Stack>

         {totalPages > 1 && (
          <HStack justify="left" mt={4} ml={{ base: "45px", md: "60px" }}>
            <Button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              isDisabled={currentPage === 1}
              size="xs"
            >
              Previous
            </Button>
             
            <Text  fontSize={{ base: "xs", lg: "sm" }} >Page {currentPage} of {totalPages}</Text>

            <Button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              isDisabled={currentPage === totalPages}
              size="xs"
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