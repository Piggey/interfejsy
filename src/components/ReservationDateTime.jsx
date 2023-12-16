/* eslint-disable react/prop-types */
import { Typography, TextField, Grid } from '@mui/material';

export const ReservationDateTime = ({ selectedDate, setSelectedDate }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="h6">Data i godzina</Typography>
      <TextField
        label="Data i godzina"
        type="datetime-local"
        value={selectedDate}
        onChange={setSelectedDate}
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
      />
    </Grid>
  );
};
