import { useRouter } from 'next/router';
import { Box, Heading, Text, Button, Stack } from '@chakra-ui/react';
import guidelineData from '../../Helper/Data/guideline.json'; 

const GuidelineTitle = () => {
  const router = useRouter();
  const { id } = router.query;

  const guideline = guidelineData.find((g) => g.id === id);

  if (!guideline) {
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
  } = guideline;

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

        <Stack direction="row" flexDirection="space-between" gap={5}>
          <Text fontSize="md" color="#000000">👁️ {views} views</Text>
          <Text fontSize="md" color="#000000">📄 Bookmark</Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default GuidelineTitle; 