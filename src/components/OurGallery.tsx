import { useEffect, useState } from "react";
import {
  Center,
  Box,
  Grid,
  GridItem,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";
import { PICTURES } from "../constants/pictures.ts";

export const OurGallery = () => {
  const [imageCount, setImageCount] = useState<number>(0);
  const [currentDateTime, setCurrentDateTime] = useState<string>("");

  useEffect(() => {
    const images = document.querySelectorAll("img");
    setImageCount(images.length);

    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}.${
      currentDate.getMonth() + 1
    }.${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}`;
    setCurrentDateTime(formattedDate);
  }, []);

  const [selectedImage, setSelectedImage] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage("");
    setIsOpen(false);
  };

  return (
    <>
      <Box p={5}>
        <Box mb={3}>Кількість зображень на сторінці: {imageCount}</Box>
        <Box>Актуальна дата і час: {currentDateTime}</Box>
      </Box>
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
                    cursor: "pointer",
                  }}
                  borderRadius="50%"
                  transition="transform 0.3s, border-color 0.3s"
                  onClick={() => openModal(img)}
                />
              </GridItem>
            ))}
          </Grid>
          <Modal isOpen={isOpen} onClose={closeModal}>
            <ModalOverlay />
            <ModalContent zIndex={9999} maxWidth="100%" maxHeight="100%">
              <ModalCloseButton bgColor="white" opacity="80%" />
              <Box textAlign="center">
                <Image src={selectedImage} alt="Great image" objectFit="contain" m="auto" />
              </Box>
            </ModalContent>
          </Modal>
        </Box>
      </Center>
    </>
  );
};
