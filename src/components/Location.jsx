import OpenStreetMapWindow from './OpenStreetMapWindow';
import { Typography, Grid, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const Location = () => {
  // Współrzędne lokalizacji
  const locationCoordinates = [51.4006, 19.7022]; // Przykładowe współrzędne dla Piotrkowa Trybunalskiego

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2" mt={4} align="center" gutterBottom>
          Gdzie jesteśmy?
        </Typography>
      </Grid>

      <Grid item xs={12} md={6}>
        <ListItem disableGutters>
          <ListItemIcon>
            <LocationOnIcon color="primary" fontSize="large" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="h4">
                Piotrków Trybunalski <br />
                ul. Sulejowska 45
              </Typography>
            }
          />
        </ListItem>
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          Tutaj możesz dodać dowolny tekst opisujący lokalizację.
        </Typography>
      </Grid>

      <Grid item xs={12} md={6}>
        <OpenStreetMapWindow coords={locationCoordinates} />
      </Grid>
    </Grid>
  );
};
