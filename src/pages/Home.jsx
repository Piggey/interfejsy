import { Box } from "@mui/material"
import { ImageGallery } from "../components/ImageGallery";
import { Reviews } from "../components/Reviews";
import { Location } from "../components/Location";

export const Home = () => {
  return (
    <Box>
      <ImageGallery />
      <Reviews />
      <Location />
    </Box>
  );
};
