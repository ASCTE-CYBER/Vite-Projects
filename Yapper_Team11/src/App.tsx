import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  Input,
} from "@chakra-ui/react";
import TweetCard from "./components/tweet-card";

const tweets = [
  {
    name: "Maya Johnson",
    username: "@maya_codes",
    time: "2m",
    text: "Just got my Vite app running with Chakra UI. The hardest part was realizing components are just fancy building blocks.",
    likes: 14,
    replies: 3,
    tag: "Web Dev",
  },
  {
    name: "Ethan Brooks",
    username: "@ethanbuilds",
    time: "12m",
    text: "Today I learned that a Stack is basically a cleaner way to organize stuff on a page without fighting CSS forever.",
    likes: 22,
    replies: 5,
    tag: "Chakra",
  },
  {
    name: "Ava Smith",
    username: "@ava_secure",
    time: "25m",
    text: "Hardcoding data first actually makes sense. Get the page looking right, then connect real data later.",
    likes: 31,
    replies: 8,
    tag: "Cyber 301",
  },
];

function App() {
 return (
  <Box bg="gray.900" minH="100vh" py={8}>
    <Container maxW="650px">
      <VStack gap={5} align="stretch">
        <Box bg="gray.800" p={6} borderRadius="2xl" boxShadow="md">
          <Heading size="lg" color="white">
            Yapper
          </Heading>
          <Text color="gray.400" mt={2}>
            A simple Twitter clone built with Vite and Chakra UI.
          </Text>
        </Box>
        <Box bg="gray.800" p={5} borderRadius="2xl" boxShadow="md">
          <VStack gap={3} align="stretch">
            <Text fontWeight="bold" color="white">
              Create a post
            </Text>
            <Input
              placeholder="What's happening?"
              bg="gray.700"
              borderColor="gray.600"
              color="white"
            />
            <Button colorScheme="twitter" alignSelf="flex-end">
              Yap
            </Button>
          </VStack>
        </Box>
        {tweets.map((tweet, index) => (
              TweetCard({ tweet, index })
            ))}
      </VStack>
    </Container>
  </Box>
);
}

export default App;