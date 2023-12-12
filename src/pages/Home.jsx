import { Box } from "@mui/material"
import { ImageGallery } from "../components/ImageGallery";
import { Reviews } from "../components/Reviews";

export const Home = () => {
  return (
    <Box>
      <ImageGallery />
      <Reviews />
    </Box>
  );
};
