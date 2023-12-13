import { Grid, Typography } from "@mui/material"
import { ImageGrid } from "../components/ImageGrid";

export const Gallery = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2" mt={4} align="center" gutterBottom>
          Galeria
        </Typography>
      </Grid>
      <ImageGrid />
    </Grid>
  );
};
