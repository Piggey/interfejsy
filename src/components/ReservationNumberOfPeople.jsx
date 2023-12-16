/* eslint-disable react/prop-types */
import { Grid, Typography, TextField } from "@mui/material";

const minNumPeople = 1;
const maxNumPeople = 15;

export const ReservationNumberOfPeople = ({ numPeople, setNumPeople }) => {
  const handleNumPeopleChange = (e) => {
    const value = e.target.value;

    if (value < minNumPeople || value > maxNumPeople) {
      return;
    }

    setNumPeople(e.target.value);
  }

  return (
    <Grid item xs={12}>
      <Typography variant="h5" mt={6} mb={2}>Podaj liczbę osób (Maks. 15)</Typography>
      <TextField
        label="Liczba osób"
        type="number"
        value={numPeople}
        onChange={handleNumPeopleChange}
        fullWidth
      />
    </Grid>
  );
};
