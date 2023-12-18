/* eslint-disable react/prop-types */
import { Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

const rooms = [
  {
    name: "Sala 1",
    image: "src/assets/sala1.jpg",
  },
  {
    name: "Sala 2",
    image: "src/assets/sala2.jpg",
  },
  {
    name: "Sala 3",
    image: "src/assets/sala1.jpg",
  },
];

export const ReservationRoomSelection = ({ selectedRoom, setSelectedRoom }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="h5" mt={6} mb={2}>
        Wybierz salę
      </Typography>
      <Grid item container spacing={2}>
        {rooms.map((room, index) => (
          <Grid item xs={4} key={index}>
            <Card
              sx={{
                border:
                  selectedRoom === room.name
                    ? "2px solid #2196F3"
                    : "2px solid transparent",
              }}
              onClick={() => setSelectedRoom(room.name)}
            >
              <CardMedia
                component="img"
                height="140"
                image={room.image}
                alt={room.name}
              />
              <CardContent>
                <Typography variant="h6">{room.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
