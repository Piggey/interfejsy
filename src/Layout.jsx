import { CssBaseline, Container } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navbar } from "./components/Navbar";
import { StickyFooter } from "./components/StickyFooter";
import { useEffect, useState } from "react";

const theme = createTheme();

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const storageEmail = localStorage.getItem("email") ?? '';
    setEmail(storageEmail);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar loggedIn={email !== ''} email={email} />
      <Container sx={{ marginTop: '64px', flexGrow: 1 }}>
        {children}
      </Container>
      <StickyFooter />
    </ThemeProvider>
  );
};
