import {
  Grid,
  Typography,
} from "@mui/material";
import { tickets } from "../data/tickets";
import { TicketKind } from "../components/TicketKind";

export const Tickets = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2" mt={4} align="center" gutterBottom>
          Bilety
        </Typography>
        <Typography
          mt={4}
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          Quickly build an effective pricing table for your potential customers
          with this layout. It&apos;s built with default MUI components with
          little customization.
        </Typography>
      </Grid>

      <Grid container mt={8} spacing={5} alignItems="flex-end">
        {tickets.map((ticket, index) => (
          <TicketKind key={index} ticket={ticket} />
        ))}
      </Grid>
    </Grid>
  );
};
