import { Grid, Paper } from "@mui/material";
import { imgGalleryData } from "../data/imageGallery";

export const ImageGrid = () => {
  return (
    <Grid container spacing={2}>
      {imgGalleryData.map((img, index) => (
        <Grid item xs={4} key={index}>
          <Paper elevation={3}>
            <img
              src={img.imgSrc}
              alt={`Image ${index + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};
