import { AppBar, Toolbar, Typography, Button, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export const Navbar = ({ loggedIn, email }) => {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar alt="Logo" src="src/assets/edan_logo.png" sx={{ width: 64, height: 64, marginRight: '8px' }} />
          <Typography variant="h6" component="div">
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              Edan
            </Link>
          </Typography>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
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
        </div>

        {loggedIn ? (
          <Typography variant="body1" color="inherit" style={{ marginRight: '8px' }}>
            Witaj, {email}
          </Typography>
        ) : (
          <Button color="inherit" component={Link} to="/login">
            Zaloguj się
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
