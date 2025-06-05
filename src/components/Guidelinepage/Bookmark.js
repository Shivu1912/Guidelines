import React, { useState } from 'react';
import { Text, useToast } from '@chakra-ui/react';

const Bookmark = () => {
  const [bookmarked, setBookmarked] = useState(false);
  const toast = useToast();

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    toast({
      title: bookmarked ? "Bookmark removed" : "Bookmarked successfully!",
      status: bookmarked ? "warning" : "success",
      duration: 2000,
      isClosable: true,
      position: 'top',
    });
  };
  
  return (
    <Text
      fontSize="md"
      cursor="pointer"
      onClick={handleBookmark}
      color={bookmarked ? 'black' : 'gray.600'}
      transition="color 0.3s ease"
    >
      📄 {bookmarked ? 'Bookmarked' : 'Bookmark'}
    </Text>
  );
};

export default Bookmark;
