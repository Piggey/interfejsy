/* eslint-disable react/prop-types */
import {
  Typography,
  TextField,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { DatePicker, TimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

const openingHours = {
  weekday: { start: 15, end: 20 },
  weekend: { start: 10, end: 20 },
};

export const ReservationDateTime = ({
  selectedStartDate,
  selectedEndDate,
  setSelectedStartDate,
  setSelectedEndDate,
}) => {
  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setSelectedEndDate(date);
  };

  const isDateDisabled = (date) => {
    const selectedDay = date.getDay();
    const selectedHour = date.getHours();

    return !!((selectedDay >= 1 && selectedDay <= 5 && selectedHour < openingHours.weekday.start) ||
      (selectedDay >= 1 && selectedDay <= 5 && selectedHour >= openingHours.weekday.end) ||
      ((selectedDay === 0 || selectedDay === 6) && selectedHour < openingHours.weekend.start) ||
      ((selectedDay === 0 || selectedDay === 6) && selectedHour >= openingHours.weekend.end));
  };

  return (
    <Grid item xs={12}>
      <Typography variant="h6">Zakres czasu</Typography>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <DatePicker
              label="Data rozpoczęcia"
              value={selectedStartDate}
              onChange={handleStartDateChange}
              renderInput={(params) => <TextField {...params} fullWidth />}
              shouldDisableDate={isDateDisabled}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TimePicker
              label="Godzina zakończenia"
              value={selectedEndDate}
              onChange={handleEndDateChange}
              renderInput={(params) => <TextField {...params} fullWidth />}
              shouldDisableDate={isDateDisabled}
            />
          </Grid>
        </Grid>

        <TableContainer component={Paper} style={{ marginTop: 16 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Godziny otwarcia</TableCell>
                {[...Array(7).keys()].map((day) => (
                  <TableCell key={day}>{day === 0 ? "Niedziela" : `Dzień ${day}`}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {[...Array(14).keys()].map((hour) => (
                <TableRow key={hour}>
                  <TableCell>{`${hour + 7}:00 - ${hour + 7}:30`}</TableCell>
                  {[...Array(7).keys()].map((day) => (
                    <TableCell
                      key={`${day}-${hour}`}
                      style={{
                        backgroundColor: isDateDisabled(
                          new Date(2023, 0, day + 1, hour + 7)
                        )
                          ? "#f0f0f0" // kolor tła dla zamkniętych godzin
                          : "transparent",
                      }}
                    >
                      {isDateDisabled(
                        new Date(2023, 0, day + 1, hour + 7)
                      )
                        ? "Zamknięte"
                        : "Otwarte"}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </LocalizationProvider>
    </Grid>
  );
};
