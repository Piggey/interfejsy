import { AppBar, Toolbar, Typography, Button, Box, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export const Navbar = ({ isLoggedIn, userName }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        {/* Logo firmy i nazwa */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
            {/* Tutaj umieść swój obrazek/logo */}
            <Avatar src="src/assets/edan_logo.png" alt="Logo" style={{ marginRight: '8px', width: '64px', height: '64px' }} />
            <Typography variant="h6" component="div">
              Edan
            </Typography>
          </Link>
        </Box>

        {/* Przyciski nawigacyjne (wyśrodkowane) */}
        <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
          <Button color="inherit" component={Link} to="/">
            Strona główna
          </Button>
          <Button color="inherit" component={Link} to="/gallery">
            Galeria
          </Button>
          <Button color="inherit" component={Link} to="/bar">
            Bar
          </Button>
          <Button color="inherit" component={Link} to="/tickets">
            Bilety
          </Button>
          <Button color="inherit" component={Link} to="/birthdays">
            Urodziny
          </Button>
        </Box>

        {/* Przycisk "Zaloguj się" lub imię i nazwisko zalogowanego użytkownika */}
        {isLoggedIn ? (
          <Typography variant="body1" color="inherit" style={{ marginRight: '8px' }}>
            Witaj, {userName}
          </Typography>
        ) : (
          <Button color="inherit" component={Link} to="/logowanie">
            Zaloguj się
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
