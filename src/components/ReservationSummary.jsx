/* eslint-disable react/prop-types */
import { Typography, Grid } from '@mui/material';

export const ReservationSummary = ({ numberOfPeople, selectedRoom, selectedDate }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="h6">Podsumowanie:</Typography>
      <Typography variant="body2">
        Liczba osób: {numberOfPeople}
        <br />
        Sala: {selectedRoom}
        <br />
        Data i godzina: {selectedDate}
      </Typography>
    </Grid>
  );
};
