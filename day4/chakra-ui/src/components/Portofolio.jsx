import { Container, Grid, GridItem } from "@chakra-ui/react";
import PortofolioCard from "./PortofolioCard";

const Portofolio = () => {
  return (
    <Container maxW="7xl" mt="8">
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem w="100%" h="10">
          <PortofolioCard
            title="Tokopedia"
            description="ini deskripsi tokopedia"
            image="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          />
        </GridItem>
        <GridItem w="100%" h="10">
          <PortofolioCard
            title="Bukalapak"
            description="ini deskripsi tokopedia"
            image="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          />
        </GridItem>
        <GridItem w="100%" h="10">
          <PortofolioCard
            title="Blibli"
            description="ini deskripsi tokopedia"
            image="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Portofolio;
