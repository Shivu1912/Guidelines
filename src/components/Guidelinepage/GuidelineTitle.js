import { Box, Heading, Text, Button, Stack ,Flex,Image} from '@chakra-ui/react';
import Bookmark from '../../components/Guidelinepage/Bookmark';

const GuidelineTitle = ({ data }) => {
  if (!data) {
    return <Text ml={4}>Loading or guideline not found.</Text>;
  }

  const {
    title,
    tags,
    publishedBy,
    publishedDate,
    authors,
    reviewedBy,
    views,
  } = data;

  return (
    <Box mx={{ base: 4, lg: 6 }} my={{ base: 4, lg: 6 }}>
      <Stack spacing={2}>
        <Heading size="lg" fontStyle="Inter">
          {title}
        </Heading>

        <Stack direction="row" flexWrap="wrap" gap={2} spacing={2}>
          {tags.map((tag, index) => (
            <Button
              key={index}
              borderRadius="md"
              bg="#EDECEC"
              color="#0E5674"
              size={{ base: "xs", lg: "sm" }}
              _hover={{ bg: "gray.100" }}
              fontFamily="Inter"
              fontSize={{ base: "xs", md: "sm" }}
              whiteSpace="normal"
              maxW={{ base: "45%", sm: "auto" }}
            >
              {tag}
            </Button>
          ))}
        </Stack>

        <Text fontSize={{ base: "sm", lg: "md" }} fontStyle="Inter">
          Published by <b>{publishedBy}</b> on <b>{publishedDate}</b>
        </Text>

        <Text fontSize={{ base: "sm", lg: "md" }} fontStyle="Inter">
          Authors: {authors.join(', ')}
        </Text>

        <Text fontSize={{ base: "sm", lg: "md" }} fontStyle="Inter">
          Reviewed by {reviewedBy}
        </Text>

        <Stack direction="row" gap={{ base: 1, lg: 2 }}>
          <Flex ml={{ base: 0, lg: 1 }} gap="5px" >
                  <Image src="../assets/view.webp" mt={{ base: 1, lg: 0 }}alt="view Logo" boxSize={{ base: "16px", lg: "20px" }} />
                  <Text
                    fontSize={{ base: "sm", lg: "md" }}
                    fontWeight="bold"
                    color="#000000"
                  > 
                 {views} views
                  </Text>
                </Flex>
          
         <Bookmark />
        </Stack>
      </Stack>
    </Box>
  );
};

export default GuidelineTitle;
