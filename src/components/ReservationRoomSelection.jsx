/* eslint-disable react/prop-types */
import { Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const rooms = [
  {
    name: 'Sala 1',
    image: 'url_do_zdjecia_sali1.jpg',
  },
  {
    name: 'Sala 2',
    image: 'url_do_zdjecia_sali2.jpg',
  },
  {
    name: 'Sala 3',
    image: 'url_do_zdjecia_sali3.jpg',
  },
];

export const ReservationRoomSelection = ({ selectedRoom, setSelectedRoom }) => {
  return (
    <Grid item container spacing={2}>
      {rooms.map((room, index) => (
        <Grid item xs={4} key={index}>
          <Card
            sx={{
              border: selectedRoom === room.name ? '2px solid #2196F3' : '2px solid transparent',
            }}
            onClick={() => setSelectedRoom(room.name)}
          >
            <CardMedia component="img" height="140" image={room.image} alt={room.name} />
            <CardContent>
              <Typography variant="h6">{room.name}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
