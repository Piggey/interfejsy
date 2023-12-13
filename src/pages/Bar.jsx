import { Grid, Typography, Paper } from "@mui/material";
import { useState } from "react";
import { products } from "../data/products";
import { categories } from "../data/categories";

export const Bar = () => {
  const [selectedCategory, setSelectedCategory] = useState('przekaski');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2" mt={4} align="center" gutterBottom>
          Bar
        </Typography>
      </Grid>

      <Grid item xs={3}>
        <Typography variant="h6" gutterBottom>
          Kategorie
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

      <Grid item xs={9} container spacing={2}>
        {products[selectedCategory]?.map((product, index) => (
          <Grid item xs={4} key={index}>
            <Paper elevation={3}>
              <div style={{ position: "relative", paddingBottom: "100%" }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                  }}
                />
              </div>
              <div style={{ padding: "8px", display: "flex", justifyContent: "space-between" }}>
                <div>
                  <Typography variant="subtitle1">{product.name}</Typography>
                </div>
                <div>
                  <Typography variant="h6">{product.price}</Typography>
                </div>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
