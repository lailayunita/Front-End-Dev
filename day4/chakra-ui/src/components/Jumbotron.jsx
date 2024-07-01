import {
  Box,
  Container,
  SimpleGrid,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";

const Jumbotron = () => {
  return (
    <Container maxW="7xl" mt="4">
      <SimpleGrid columns={2}>
        <Flex flexDir="column" justifyContent="center">
          <Text fontSize="5xl">Hello!</Text>
          <Text fontSize="3xl">Welcome to My Page</Text>
        </Flex>
        <Box>
          <Image
            src="https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="swiss"
          />
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Jumbotron;
