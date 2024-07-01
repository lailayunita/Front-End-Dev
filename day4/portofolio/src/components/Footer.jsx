import { Box, Container, Flex, Link } from "@chakra-ui/react";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Box bg="#616161" color="white">
        <Container maxW="7xl" py={4} mt={10}>
          <Flex gap={4} justifyContent="center">
            <Link
              href="https://www.instagram.com/lailayunita_"
              opacity="0.5"
              _hover={{ opacity: "1" }}
            >
              <FaInstagramSquare size="40px" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/lailayunita01/"
              opacity="0.5"
              _hover={{ opacity: "1" }}
            >
              <FaLinkedin size="40px" />
            </Link>
            <Link
              href="https://github.com/lailayunita"
              opacity="0.5"
              _hover={{ opacity: "1" }}
            >
              <FaGithubSquare size="40px" />
            </Link>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
