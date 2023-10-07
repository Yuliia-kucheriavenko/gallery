import { Center, Box, Grid, GridItem, Image } from "@chakra-ui/react";
import { PICTURES } from "../constants/pictures.ts";

export const OurGallery = () => {
  return (
    <Center pt={10}>
      <Box w="80%">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={4}
        >
          {PICTURES.map(({ id, img }) => (
            <GridItem key={id}>
              <Image
                src={img}
                alt={`Picture ${id + 1}`}
                boxSize="100%"
                objectFit="cover"
                border="5px solid"
                borderColor={id % 4 === 0 ? "red" : "525252"}
                _hover={{
                  border: "5px solid yellow",
                  transform: "rotate(45deg)",
                }}
                borderRadius="50%"
                transition="transform 0.3s, border-color 0.3s"
              />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Center>
  );
};
