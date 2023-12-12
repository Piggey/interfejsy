import { Grid, Typography, IconButton, Paper } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";

export const ImageGallery = () => {
  const images = [
    'src/assets/gallery_img1.jpg',
    'src/assets/gallery_img2.jpg',
    'src/assets/gallery_img3.jpg',
    'src/assets/gallery_img4.jpg',
    'src/assets/gallery_img5.jpg',
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Grid container spacing={2}>
      {/* Duże zdjęcie po lewej stronie */}
      <Grid item xs={12} md={8} style={{ position: 'relative' }}>
        <Paper elevation={3} style={{ position: 'relative' }}>
          <img
            src={images[selectedImageIndex]}
            alt={`Zdjęcie ${selectedImageIndex + 1}`}
            style={{ width: '100%', height: 'auto', maxHeight: '400px' }}
          />
          <div style={{ position: 'absolute', top: '50%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <IconButton onClick={handlePrevImage} style={{ backgroundColor: 'white', borderRadius: '50%', padding: '8px', position: 'absolute', left: '8px' }}>
              <ArrowBackIcon />
            </IconButton>
            <IconButton onClick={handleNextImage} style={{ backgroundColor: 'white', borderRadius: '50%', padding: '8px', position: 'absolute', right: '8px' }}>
              <ArrowForwardIcon />
            </IconButton>
          </div>
        </Paper>
      </Grid>

      {/* Tytuł i opis zdjęcia po prawej stronie */}
      <Grid item xs={12} md={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Typography variant="h4" style={{ marginBottom: '16px' }}>
          Tytuł zdjęcia
        </Typography>
        <Typography variant="body1">
          Opis zdjęcia Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Grid>

      {/* Miniatury zdjęć pod dużym zdjęciem z odstępami */}
      <Grid item xs={12} md={8} style={{ marginTop: '16px', display: 'flex', gap: '8px', justifyContent: 'center' }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Miniatura ${index + 1}`}
            style={{
              width: '64px',
              height: '64px',
              cursor: 'pointer',
              border: index === selectedImageIndex ? '2px solid blue' : 'none', // Podświetlenie wybranej miniatury
            }}
            onClick={() => setSelectedImageIndex(index)}
          />
        ))}
      </Grid>
    </Grid>
  );
};

