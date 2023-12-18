/* eslint-disable react/prop-types */
import { Grid, Typography } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";

export const ReservationDateTime = ({
  selectedDate,
  setSelectedDate,
  selectedStartTime,
  setSelectedStartTime,
  selectedEndTime,
  setSelectedEndTime,
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

  const disableTimeValidation = (date, selectedTime) => {
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    const selectedHour = selectedTime.getHours();

    return !isHourInRange(selectedHour, isWeekend);
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const handleStartTimeChange = (newTime) => {
    setSelectedStartTime(newTime);
  };

  const handleEndTimeChange = (newTime) => {
    setSelectedEndTime(newTime);
  };

  return (
    <Grid container spacing={2} item xs={12} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h5" mt={6} mb={2}>
          Wybierz datę i godzinę
        </Typography>
      </Grid>
      <Grid item xs={5}>
        <DatePicker
          label="Data rezerwacji"
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(props) => (
            <input {...props} readOnly />
          )}
          fullWidth
        />
      </Grid>
      <Grid item xs={3}>
        <TimePicker
          label="Czas początkowy"
          value={selectedStartTime}
          onChange={handleStartTimeChange}
          disableTimeValidation={(date) => disableTimeValidation(date, selectedStartTime)}
          renderInput={(props) => (
            <input {...props} readOnly />
          )}
          fullWidth
        />
      </Grid>
      <Grid item xs={3}>
        <TimePicker
          label="Czas końcowy"
          value={selectedEndTime}
          onChange={handleEndTimeChange}
          disableTimeValidation={(date) => disableTimeValidation(date, selectedEndTime)}
          renderInput={(props) => (
            <input {...props} readOnly />
          )}
          fullWidth
        />
      </Grid>
    </Grid>
  );
};
