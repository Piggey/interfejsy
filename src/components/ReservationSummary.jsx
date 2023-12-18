/* eslint-disable react/prop-types */
import { Grid, Typography, Table, TableBody, TableCell, TableRow } from '@mui/material';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';

export const ReservationSummary = ({ numberOfPeople, selectedRoom, selectedDate, selectedStartTime, selectedEndTime }) => {
  const date = format(selectedDate, 'dd MMMM yyyy', { locale: pl });
  const startTime = format(selectedStartTime, "HH:MM", { locale: pl });
  const endTime = format(selectedEndTime, "HH:MM", { locale: pl });

  const totalPrice = Math.floor(Math.random() * (500 - 200 + 1) ) + 200;

  return (
    <Grid item xs={12}>
      <Typography variant="h4" mt={6} mb={2}>
        Podsumowanie:
      </Typography>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Liczba osób:</TableCell>
            <TableCell>{numberOfPeople}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Sala:</TableCell>
            <TableCell>{selectedRoom}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Data i godzina:</TableCell>
            <TableCell>{`${startTime} - ${endTime}, ${date}`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <strong>Cena:</strong>
            </TableCell>
            <TableCell>
              <strong>{totalPrice} zł</strong>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Grid>
  );
};
