/* eslint-disable react/prop-types */
import { Grid, Typography } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";

export const ReservationDateTime = ({ selectedStartDate, setSelectedStartDate, selectedEndDate, setSelectedEndDate }) => {
  const handleChangeStartDate = (newValue) => {
    setSelectedStartDate(newValue);
  }

  const handleChangeEndDate = (newValue) => {
    setSelectedEndDate(newValue);
  }

  return (
    <Grid item xs={12}>
      <Typography variant="h5" mt={6} mb={2}>Wybierz datę i godzinę</Typography>
      <DateTimePicker label="Początek rezerwacji" value={selectedStartDate} onChange={handleChangeStartDate} orientation="landscape" />
      <DateTimePicker label="Koniec rezerwacji" value={selectedEndDate} onChange={handleChangeEndDate} orientation="landscape" />
    </Grid>
  );
};
