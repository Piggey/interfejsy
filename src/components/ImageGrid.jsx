import { Grid, Paper, Modal, Fade, Backdrop } from "@mui/material";
import { imgGalleryData } from "../data/imageGallery";
import { useState } from "react";

export const ImageGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Grid container spacing={2}>
        {imgGalleryData.map((img, index) => (
          <Grid item xs={6} key={index} onClick={() => handleImageClick(img.imgSrc)}>
            <Paper elevation={3}>
              <img
                src={img.imgSrc}
                alt={img.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", cursor: "pointer" }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={!!selectedImage}
        onClose={handleClose}
        aria-labelledby="image-modal-title"
        aria-describedby="image-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={!!selectedImage}>
          <div>
            <img
              src={selectedImage}
              alt="Selected Image"
              style={{ maxWidth: "100%", maxHeight: "100%", margin: "auto", display: "block" }}
            />
          </div>
        </Fade>
      </Modal>
    </>
  );
};
