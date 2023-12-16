/* eslint-disable react/prop-types */
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Box,
  Typography,
  CardActions,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import StarIcon from "@mui/icons-material/StarBorder";
import { useState } from "react";

export const TicketKind = ({ ticket }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleBuyTicket = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Grid
      item
      key={ticket.title}
      xs={12}
      sm={ticket.title === "Enterprise" ? 12 : 6}
      md={4}
    >
      <Card>
        <CardHeader
          title={ticket.title}
          subheader={ticket.subheader}
          titleTypographyProps={{ align: "center" }}
          action={ticket.title === "Pro" ? <StarIcon /> : null}
          subheaderTypographyProps={{
            align: "center",
          }}
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[700],
          }}
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
              mb: 2,
            }}
          >
            <Typography component="h2" variant="h3" color="text.primary">
              {ticket.price}zł
            </Typography>
            <Typography variant="h6" color="text.secondary">
              /os.
            </Typography>
          </Box>
          <ul>
            {ticket.description.map((line) => (
              <Typography
                component="li"
                variant="subtitle1"
                align="center"
                key={line}
              >
                {line}
              </Typography>
            ))}
          </ul>
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            variant={ticket.buttonVariant}
            onClick={handleBuyTicket}
          >
            {ticket.buttonText}
          </Button>
        </CardActions>
      </Card>
      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle>Zakupiono bilet</DialogTitle>
        <DialogContent>
          <Typography>
            Dziękujemy za zakup biletu! Potwierdzenie zostało wysłane na adres
            e-mail.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary" autoFocus>
            Zamknij
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};
