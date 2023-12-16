import {
  Typography,
  Container,
  Stepper,
  Step,
  StepLabel,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  StepIcon,
} from '@mui/material';
import { useState } from 'react';
import CakeIcon from '@mui/icons-material/Cake';
import GroupIcon from '@mui/icons-material/Group';
import EventIcon from '@mui/icons-material/Event';

export const Birthdays = () => {
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleNumberOfPeopleChange = (event) => {
    setNumberOfPeople(event.target.value);
  };

  const handleRoomChange = (event) => {
    setSelectedRoom(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const calculatePrice = () => {
    // Tutaj można dodać logikę obliczania ceny w zależności od wybranych opcji
    return '$100'; // Przykładowa cena
  };

  const steps = [
    { label: 'Liczba osób', icon: <GroupIcon /> },
    { label: 'Wybór sali', icon: <EventIcon /> },
    { label: 'Wybór daty i godziny', icon: <CakeIcon /> },
  ];

  return (
    <Container maxWidth="sm" sx={{ marginTop: 5 }}>
      <Typography variant="h5">Rezerwacja na Urodziny</Typography>
      <Stepper activeStep={steps.length} alternativeLabel sx={{ marginTop: 2 }}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel
              StepIconComponent={({ active, completed }) => (
                <StepIcon icon={step.icon} active={active} completed={completed} />
              )}
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      {steps.map((step, index) => (
        <div key={index}>
          <Typography variant="h6" sx={{ marginTop: 2 }}>{step.label}</Typography>
          {index === 0 && (
            <TextField
              label="Liczba osób"
              type="number"
              value={numberOfPeople}
              onChange={handleNumberOfPeopleChange}
              fullWidth
            />
          )}
          {index === 1 && (
            <FormControl fullWidth>
              <InputLabel id="room-label">Wybór sali</InputLabel>
              <Select labelId="room-label" value={selectedRoom} onChange={handleRoomChange}>
                <MenuItem value="sala1">Sala 1</MenuItem>
                <MenuItem value="sala2">Sala 2</MenuItem>
                <MenuItem value="sala3">Sala 3</MenuItem>
              </Select>
            </FormControl>
          )}
          {index === 2 && (
            <TextField
              label="Data i godzina"
              type="datetime-local"
              value={selectedDate}
              onChange={handleDateChange}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          )}
        </div>
      ))}
      <Typography variant="h6" sx={{ marginTop: 2 }}>Podsumowanie:</Typography>
      <Typography variant="body2">
        Liczba osób: {numberOfPeople}
        <br />
        Sala: {selectedRoom}
        <br />
        Data i godzina: {selectedDate}
        <br />
        Cena: {calculatePrice()}
      </Typography>
    </Container>
  );
};