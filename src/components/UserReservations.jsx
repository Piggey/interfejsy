/* eslint-disable react/prop-types */
import { List, ListItem, Typography, Paper } from "@mui/material";
import { format } from "date-fns";
import { pl } from "date-fns/locale";

const ReservationDetails = ({ reservation }) => {
  const reservationDate = format(reservation.reservationDate, "dd MMMM yyyy", { locale: pl });

  return (
    <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px', width: '100%' }}>
      <Typography variant="subtitle1" style={{ fontWeight: 'bold', marginBottom: '8px' }}>
        {`Rezerwacja #${reservation.id}`}
      </Typography>
      <Typography>
        {`Sala: ${reservation.room}`}
      </Typography>
      <Typography>
        {`Data rezerwacji: ${reservationDate}`}
      </Typography>
      <Typography>
        {`Godziny rezerwacji: ${reservation.timeFrom} - ${reservation.timeTo}`}
      </Typography>
      <Typography>
        {`Cena: ${reservation.price}zł`}
      </Typography>
    </Paper>
  );
};

export const UserReservations = ({ reservations }) => {
  return (
    <>
    {reservations.length > 0 ? (
      <List>
        {reservations.map((reservation) => (
          <ListItem key={reservation.id}>
            <ReservationDetails reservation={reservation} />
          </ListItem>
        ))}
      </List>
    ) : (
      <Typography>Brak zakupionych rezerwacji.</Typography>
    )}
    </>
  );
};
