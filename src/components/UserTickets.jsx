/* eslint-disable react/prop-types */
import { Paper, Typography, List, ListItem, Button, Modal } from "@mui/material"
import { format } from "date-fns";
import { pl } from "date-fns/locale";
import { useState } from "react";

const TicketDetails = ({ ticket }) => {
  const purchaseDate = format(ticket.purchaseDate, "dd MMMM yyyy", { locale: pl });
  const validToDate = format(ticket.validTo, "dd MMMM yyyy", { locale: pl });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePrintTicket = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const isTicketExpired = ticket.validTo < Date.now();
  const buttonText = isTicketExpired ? 'Bilet wykorzystany' : 'Drukuj bilet';

  return (
    <>
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
        <Button
          variant="contained"
          color="primary"
          onClick={handlePrintTicket}
          style={{ float: 'right' }}
          disabled={isTicketExpired}
        >
          {buttonText}
        </Button>
      </Paper>

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
          <Typography variant="h6">Bilet został wydrukowany.</Typography>
        </div>
      </Modal>
    </>
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
