import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <>
      <Container maxW="7xl" h="100%" py={4} my={10}>
        <Flex
          gap={6}
          alignItems="center"
          direction={{ base: "column", md: "row" }}
        >
          <Box w={{ base: "100%", md: "30%" }} bg="#616161" borderRadius="10px">
            <Image
              src="../public/photo.png"
              alt="Profile picture"
              w="300px"
              h="300px"
              objectFit="cover"
              m="auto"
            />
          </Box>
          <Box w={{ base: "100%", md: "70%" }}>
            <Flex direction="column" gap={6}>
              <Heading size="lg" textAlign={{ base: "center", md: "left" }}>
                About Me
              </Heading>
              <Text textAlign="justify">
                I am a Fresh Graduate of Informatics Engineering Student with a
                keen interest in web development. Eager to leverage my technical
                skills in HTML, CSS, and JavaScript to create user-friendly and
                visually appealing websites. Currently exploring various web
                frameworks and libraries, including React, to enhance my
                proficiency in modern web development. Excited to contribute to
                innovative projects, collaborate with industry professionals,
                and further develop my skills in the dynamic field of web
                development.
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default About;
