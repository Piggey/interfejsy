import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export const StickyFooter = () => {
  return (
    <Box mt={12}>
      <Box
        component="footer"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 3,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="src/assets/edan_logo.png"
              alt="Edan Logo"
              style={{ width: 50, marginRight: 10 }}
            />
            <div>
              <Typography variant="h6">
                Centrum zabaw dla dzieci Edan
              </Typography>
            </div>
          </div>
        </Container>
        <Container maxWidth="sm">
          <Typography variant="body2">
            ul. Sulejowska 45
            <br />
            97-300 Piotrków Trybunalski
            <br />
            tel. 534 014 006
            <br />
            e-mail: biuro@edanpiotrkow.pl
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};