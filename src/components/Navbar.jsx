import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Menu,
  MenuItem,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

// eslint-disable-next-line react/prop-types
export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { email, logout } = useAuth();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleClose();
  };

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            alt="Logo"
            src="src/assets/edan_logo.png"
            component={Link}
            to="/"
            sx={{ width: 64, height: 64 }}
          />
          <Typography variant="h4" component="div">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Edan
            </Link>
          </Typography>
        </div>

        <div style={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
          <Button color="inherit" component={Link} to="/gallery">
            Galeria
          </Button>
          <Button color="inherit" component={Link} to="/bar">
            Bar
          </Button>
          {email && (
            <Grid>
              <Button color="inherit" component={Link} to="/tickets">
                Bilety
              </Button>

              <Button color="inherit" component={Link} to="/birthdays">
                Urodziny
              </Button>
            </Grid>
          )}
        </div>

        {email ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "8px",
            }}
          >
            <Typography variant="body1" style={{ marginRight: "8px" }}>
              {email}
            </Typography>
            <Avatar alt="User Avatar" onClick={handleMenuClick} />
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link
                  to="/history"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Historia
                </Link>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Wyloguj się
                </Link>
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <Button color="inherit" component={Link} to="/login">
            Zaloguj się
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
