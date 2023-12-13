import OpenStreetMapWindow from './OpenStreetMapWindow';
import { Typography, Grid, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const Location = () => {
  const locationCoordinates = [51.405888, 19.715845];

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
        <Typography variant="h5">
          Godziny otwarcia
        </Typography>
        <Typography>
          (wejście klientów do godz. 19:00)
        </Typography>
        <Typography>
          Poniedziałek - Piątek: 15:00 - 20:00 <br />
          Sobota - Niedziela: 10:00 - 20:00
        </Typography>
      </Grid>

      <Grid item xs={12} md={6}>
        <OpenStreetMapWindow coords={locationCoordinates} />
      </Grid>
    </Grid>
  );
};