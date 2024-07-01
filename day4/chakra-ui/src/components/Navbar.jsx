import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <Box bgColor="#3182ce" color="white">
      <Container maxW="7xl">
        <Flex justify="space-between" p="4">
          <Text>Logo</Text>
          <Text display={{ base: "none", md: "block" }}>Profile</Text>
          <Box display={{ base: "block", md: "none" }}>
            <HiMenu size="20px" />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
