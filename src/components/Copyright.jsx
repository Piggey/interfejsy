import { Typography, Link } from "@mui/material";

export const Copyright = (props) => {
  return (
    <Typography variant="body2" color="text.secondary" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Centrum zabaw dla dzieci Edan
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};
