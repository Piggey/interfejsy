import { Grid, Typography, IconButton, Paper, Slide } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";
import { imgGalleryData } from "../data/imageGallery";

export const ImageGallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleNextImage = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex + 1) % imgGalleryData.length
    );
  };

  const handlePrevImage = () => {
    setSelectedImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + imgGalleryData.length) % imgGalleryData.length
    );
  };

  const { name, description, imgSrc } = imgGalleryData[selectedImageIndex];

  return (
    <Grid container spacing={2}>
      {/* Duże zdjęcie po lewej stronie */}
      <Grid item xs={12} md={8} style={{ position: "relative" }}>
        <Paper elevation={3} style={{ position: "relative" }}>
          <Slide direction="right" in={true} timeout={500}>
            <img
              key={selectedImageIndex}
              src={imgSrc}
              alt={name}
              style={{ width: "100%", height: "auto", maxHeight: "400px" }}
            />
          </Slide>
          <div
            style={{
              position: "absolute",
              top: "50%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              onClick={handlePrevImage}
              style={{
                backgroundColor: "white",
                borderRadius: "50%",
                padding: "8px",
                position: "absolute",
                left: "8px",
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <IconButton
              onClick={handleNextImage}
              style={{
                backgroundColor: "white",
                borderRadius: "50%",
                padding: "8px",
                position: "absolute",
                right: "8px",
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </div>
        </Paper>
      </Grid>

      {/* Tytuł i opis zdjęcia po prawej stronie */}
      <Grid
        item
        xs={12}
        md={4}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h4" style={{ marginBottom: "16px" }}>
          {name}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </Grid>

      {/* Miniatury zdjęć pod dużym zdjęciem z odstępami */}
      <Grid
        item
        xs={12}
        md={8}
        style={{
          marginTop: "16px",
          display: "flex",
          gap: "8px",
          justifyContent: "center",
        }}
      >
        {imgGalleryData.map((data, index) => (
          <img
            key={index}
            src={data.imgSrc}
            alt={data.name}
            style={{
              width: "64px",
              height: "64px",
              cursor: "pointer",
              border:
                index === selectedImageIndex ? "2px solid lightblue" : "none",
            }}
            onClick={() => setSelectedImageIndex(index)}
          />
        ))}
      </Grid>
    </Grid>
  );
};
