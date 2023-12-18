/* eslint-disable react/prop-types */
import { Grid, Typography } from "@mui/material";
import { purchaseCategories } from "../data/purchaseCategories";
import { userPurchases } from "../data/userPurchases";
import { useState } from "react";
import { UserReservations } from "../components/UserReservations";
import { UserTickets } from "../components/UserTickets";

export const History = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState("bilety");

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2" mt={4} align="center" gutterBottom>
          Historia zakupów
        </Typography>
      </Grid>

      <Grid item xs={3}>
        <Typography variant="h6" gutterBottom>
          Kategorie
        </Typography>
        {purchaseCategories.map((category) => (
          <Typography
            key={category.id}
            variant="subtitle1"
            style={{
              cursor: "pointer",
              marginBottom: "8px",
              fontWeight:
                selectedCategoryId === category.id ? "bold" : "normal",
              fontStyle: "italic",
              color: selectedCategoryId === category.id ? "#2f78ff" : "inherit",
            }}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.name}
          </Typography>
        ))}
      </Grid>

      <Grid item xs={8}>
        {selectedCategoryId === "bilety" ? (
          <UserTickets tickets={userPurchases.bilety} />
        ) : (
          <UserReservations reservations={userPurchases.rezerwacje} />
        )}
      </Grid>
    </Grid>
  );
};
