/* eslint-disable react/prop-types */
import { Grid, Card, CardHeader, CardContent, Box, Typography, CardActions, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/StarBorder";

export const TicketKind = ({ ticket }) => {
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
              ${ticket.price}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              /mo
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
          <Button fullWidth variant={ticket.buttonVariant}>
            {ticket.buttonText}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
