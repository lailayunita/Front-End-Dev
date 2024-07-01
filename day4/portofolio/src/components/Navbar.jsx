import { Box, Container, Flex, Text, UnorderedList } from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <Box bg="white" color="#616161" pos="sticky" top={0} zIndex="999">
      <Container maxW="7xl" fontWeight="bold">
        <Flex justify="space-between" py="4">
          <Text p="6px">Laila</Text>
          <UnorderedList
            listStyleType="none"
            display={{ base: "none", md: "inline" }}
          >
            <Flex gap={8}>
              <NavItem>Home</NavItem>
              <NavItem>About</NavItem>
              <NavItem>Projects</NavItem>
              <NavItem>Skills</NavItem>
            </Flex>
          </UnorderedList>
          <Box display={{ base: "block", md: "none" }}>
            <HiMenu size="20px" />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
