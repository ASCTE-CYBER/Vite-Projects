import {
  Box,
  Text,
  VStack,
  HStack,
  Avatar,
  Badge,
} from "@chakra-ui/react";


function TweetCard( { tweet, index }: { tweet: any; index: number }) {
  return (
    <Box
        key={index}
        bg="gray.800"
        p={5}
        borderRadius="2xl"
        boxShadow="md"
        border="1px solid"
        borderColor="gray.700"
        >
        <HStack align="start" gap={4}>
            <Avatar.Root>
            <Avatar.Fallback name={tweet.name} />
            </Avatar.Root>

            <VStack align="stretch" gap={2} flex="1">
            <HStack justify="space-between">
                <Box>
                <HStack>
                    <Text fontWeight="bold" color="white">
                    {tweet.name}
                    </Text>
                    <Badge colorScheme="twitter">{tweet.tag}</Badge>
                </HStack>
                <Text color="gray.400" fontSize="sm">
                    {tweet.username} · {tweet.time}
                </Text>
                </Box>
            </HStack>

            <Text color="white">{tweet.text}</Text>

            <HStack gap={6} color="gray.400" fontSize="sm" pt={2}>
                <Text>💬 {tweet.replies}</Text>
                <Text>❤️ {tweet.likes}</Text>
                <Text>🔁 Share</Text>
            </HStack>
            </VStack>
        </HStack>
        </Box>
  );
}

export default TweetCard;