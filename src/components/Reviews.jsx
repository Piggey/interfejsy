import { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { userReviews } from "../data/userReviews";
import { UserReview } from "../components/UserReview";

export const Reviews = () => {
  const [showAllReviews, setShowAllReviews] = useState(false);

  const reviewsToDisplay = showAllReviews
    ? userReviews
    : userReviews.slice(0, 2);

  const handleShowMore = () => {
    setShowAllReviews(true);
  };

  return (
    <div>
      <Grid item xs={12}>
        <Typography variant="h2" mt={12} align="center" gutterBottom>
          Opinie
        </Typography>
      </Grid>
      {reviewsToDisplay.map((review, index) => (
        <div key={index} style={{ marginBottom: "16px" }}>
          <UserReview {...review} />
        </div>
      ))}
      {!showAllReviews && (
        <Button
          variant="contained"
          color="primary"
          onClick={handleShowMore}
          style={{ marginTop: "16px" }}
        >
          Pokaż więcej
        </Button>
      )}
    </div>
  );
};
