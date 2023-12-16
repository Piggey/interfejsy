import { Grid, Typography } from "@mui/material"
import { reservations } from "../data/reservations";

export const History = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2" mt={4} align="center" gutterBottom>
          Historia zakupów
        </Typography>
      </Grid>

      <Grid item xs={3}>
        <Typography variant="h6" gutterBottom>
          
        </Typography>
        {categories.map((category) => (
          <Typography
            key={category.id}
            variant="subtitle1"
            style={{
              cursor: "pointer",
              marginBottom: "8px",
              fontWeight: selectedCategory === category.id ? "bold" : "normal",
              fontStyle: "italic",
              color: selectedCategory === category.id ? "#2f78ff" : "inherit",
            }}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.name}
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
};
