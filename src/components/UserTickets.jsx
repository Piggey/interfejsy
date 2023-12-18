/* eslint-disable react/prop-types */
import { Paper, Typography, List, ListItem } from "@mui/material"
import { format } from "date-fns";
import { pl } from "date-fns/locale";

const TicketDetails = ({ ticket }) => {
  const purchaseDate = format(ticket.purchaseDate, "dd MMMM yyyy", { locale: pl });
  const validToDate = format(ticket.validTo, "dd MMMM yyyy", { locale: pl });

  return (
    <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px', width: '100%' }}>
      <Typography variant="subtitle1" style={{ fontWeight: 'bold', marginBottom: '8px' }}>
        {`Bilet #${ticket.id}`}
      </Typography>
      <Typography>
        {ticket.type}
      </Typography>
      <Typography>
        {`Zakupiono: ${purchaseDate}`}
      </Typography>
      <Typography>
        {`Ważne do: ${validToDate}`}
      </Typography>
    </Paper>
  );
};

export const UserTickets = ({ tickets }) => {
  return (
    <>
      {tickets.length > 0 ? (
        <List>
          {tickets.map((ticket) => (
            <ListItem key={ticket.id}>
              <TicketDetails ticket={ticket} />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography>Brak zakupionych biletów.</Typography>
      )}
    </>
  );
};
