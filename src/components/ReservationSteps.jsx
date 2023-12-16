import { Stepper, Step, StepLabel, StepIcon, Container } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const steps = [
  "Podaj liczbę osób",
  "Wybierz salę",
  "Wybierz datę i godzinę",
  "Zarezerwuj!",
];

const iconMap = {
  0: <PeopleIcon />,
  1: <MeetingRoomIcon />,
  2: <AccessTimeIcon />,
  3: <EventAvailableIcon />,
};

export const ReservationSteps = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: "15px"}}>
      <Stepper alternativeLabel>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel
              StepIconComponent={({ active, completed }) => (
                <StepIcon
                  icon={iconMap[index]}
                  active={active}
                  completed={completed}
                />
              )}
            >
              {step}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Container>
  );
};
