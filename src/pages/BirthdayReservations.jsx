import {
  Typography,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useState } from "react";
import { ReservationSteps } from "../components/ReservationSteps";
import { ReservationNumberOfPeople } from "../components/ReservationNumberOfPeople";
import { ReservationRoomSelection } from "../components/ReservationRoomSelection";
import { ReservationDateTime } from "../components/ReservationDateTime";
import { ReservationSummary } from "../components/ReservationSummary";

export const BirthdayReservations = () => {
  const [numPeople, setNumPeople] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2" mt={4} align="center" gutterBottom>
          Rezerwacja na urodziny
        </Typography>
      </Grid>

      <ReservationSteps />
      <ReservationNumberOfPeople
        numPeople={numPeople}
        setNumPeople={setNumPeople}
      />
      <ReservationRoomSelection
        selectedRoom={selectedRoom}
        setSelectedRoom={setSelectedRoom}
      />
      <ReservationDateTime
        selectedStartDate={selectedStartDate}
        setSelectedStartDate={setSelectedStartDate}
        selectedEndDate={selectedEndDate}
        setSelectedEndDate={setSelectedEndDate}
      />
      <ReservationSummary
        numberOfPeople={numPeople}
        startDate={selectedStartDate}
        endDate={selectedEndDate}
        selectedRoom={selectedRoom}
      />
      <Grid item xs={12} align="center">
        <Button variant="contained" color="primary" onClick={handleOpenModal}>
          Złóż rezerwację
        </Button>
        <Dialog open={isModalOpen} onClose={handleCloseModal}>
          <DialogTitle>Rezerwacja złożona</DialogTitle>
          <DialogContent>
            <Typography>
              Dziękujemy za złożenie rezerwacji. Potwierdzenie zostało wysłane
              na adres e-mail.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal} color="primary" autoFocus>
              Zamknij
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Grid>
  );
};
