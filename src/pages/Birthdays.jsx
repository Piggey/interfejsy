import { Typography, Grid } from "@mui/material";
import { useState } from "react";
import { ReservationSteps } from "../components/ReservationSteps";
import { ReservationNumberOfPeople } from "../components/ReservationNumberOfPeople";
import { ReservationRoomSelection } from "../components/ReservationRoomSelection";
import { ReservationDateTime } from "../components/ReservationDateTime";
import { ReservationSummary } from "../components/ReservationSummary";

export const Birthdays = () => {
  const [numPeople, setNumPeople] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

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
      <ReservationSummary />
    </Grid>
  );
};
