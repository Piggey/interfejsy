import { CssBaseline, Container } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navbar } from "./components/Navbar";
import { StickyFooter } from "./components/StickyFooter";

const theme = createTheme();

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar loggedIn={false} />
      <Container sx={{ marginTop: '64px', flexGrow: 1 }}>
        {children}
      </Container>
      <StickyFooter />
    </ThemeProvider>
  );
};
