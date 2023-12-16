/* eslint-disable react/prop-types */
import { Grid, Typography } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";

export const ReservationDateTime = ({
  selectedStartDate,
  setSelectedStartDate,
  selectedEndDate,
  setSelectedEndDate,
}) => {
  const isHourInRange = (hour, isWeekend) => {
    const openingHours = {
      weekday: { start: 15, end: 20 },
      weekend: { start: 10, end: 20 },
    };

    return isWeekend
      ? hour >= openingHours.weekend.start && hour < openingHours.weekend.end
      : hour >= openingHours.weekday.start && hour < openingHours.weekday.end;
  };

  const disableTimeValidation = (date) => {
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;

    return !isHourInRange(date.getHours(), isWeekend);
  };

  const handleChangeStartDate = (newValue) => {
    setSelectedStartDate(newValue);
  };

  const handleChangeEndDate = (newValue) => {
    setSelectedEndDate(newValue);
  };

  return (
    <Grid container spacing={2} item xs={12} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h5" mt={6} mb={2}>
          Wybierz datę i godzinę
        </Typography>
      </Grid>
      <Grid item xs={5}>
        <DateTimePicker
          label="Początek rezerwacji"
          value={selectedStartDate}
          onChange={handleChangeStartDate}
          orientation="landscape"
          disableTimeValidation={disableTimeValidation}
          fullWidth
        />
      </Grid>
      <Grid item>
        <DateTimePicker
          label="Koniec rezerwacji"
          value={selectedEndDate}
          onChange={handleChangeEndDate}
          orientation="landscape"
          disableTimeValidation={disableTimeValidation}
          fullWidth
        />
      </Grid>
    </Grid>
  );
};
