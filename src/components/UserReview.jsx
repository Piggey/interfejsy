import {
  Avatar,
  Typography,
  Rating,
  Box,
  IconButton,
  Grid,
  Chip,
} from "@mui/material";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react";
import { useAuth } from "../auth/useAuth";

// eslint-disable-next-line react/prop-types
export const UserReview = ({ username, rating, content, verified, likesCount, dislikesCount }) => {
  const [likes, setLikes] = useState(likesCount || 0);
  const [dislikes, setDislikes] = useState(dislikesCount || 0);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const { email } = useAuth();

  const handleLike = () => {
    if (isLiked) {
      setLikes((prevLikes) => prevLikes - 1);
    } else {
      setLikes((prevLikes) => prevLikes + 1);
      if (isDisliked) {
        setDislikes((prevDislikes) => prevDislikes - 1);
        setIsDisliked(false);
      }
    }
    setIsLiked(!isLiked);
  };

  const handleDislike = () => {
    if (isDisliked) {
      setDislikes((prevDislikes) => prevDislikes - 1);
    } else {
      setDislikes((prevDislikes) => prevDislikes + 1);
      if (isLiked) {
        setLikes((prevLikes) => prevLikes - 1);
        setIsLiked(false);
      }
    }
    setIsDisliked(!isDisliked);
  };

  return (
    <Grid container spacing={2} alignItems="center">
      {/* Avatar i nazwa użytkownika obok na lewej stronie */}
      <Grid item xs={12} sm={4}>
        <Box display="flex" alignItems="center">
          <Avatar alt={username} />
          <Typography variant="subtitle1" sx={{ marginLeft: '8px' }}>
            {username}
          </Typography>
          {verified && (
            <Chip
              icon={<CheckIcon />}
              label="Zweryfikowany pobyt"
              variant="outlined"
              color="primary"
              size="small"
              sx={{
                marginLeft: '8px',
                borderColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.main,
              }}
            />
          )}
        </Box>
      </Grid>

      {/* Ocena w prawym górnym rogu */}
      <Grid item xs={12} sm={8}>
        <Box display="flex" justifyContent="flex-end" alignItems="center">
          <Typography variant="h6" sx={{ marginRight: '8px' }}>
            Ocena:
          </Typography>
          <Rating value={rating} precision={0.5} readOnly sx={{ color: '#FFD700' /* Ciemniejszy żółty */ }} />
        </Box>
      </Grid>

      {/* Treść opinii */}
      <Grid item xs={12}>
        <Typography variant="body1">{content}</Typography>
      </Grid>

      {/* Pytanie "Czy opinia była pomocna?" i ocena za pomocą lapki w górę i w dół */}
      <Grid item xs={12}>
        <Box display="flex" alignItems="center">
          <Typography variant="body2" sx={{ marginRight: '8px' }}>
            Czy opinia była pomocna?
          </Typography>
          <IconButton color="primary" onClick={handleLike} disabled={!email}>
            {isLiked ? <ThumbUpAltIcon sx={{ color: 'black' }} /> : <ThumbUpAltOutlinedIcon sx={{ color: 'black' }} />}
          </IconButton>
          <Typography variant="body2" sx={{ marginRight: '8px' }}>
            {likes}
          </Typography>
          <IconButton color="secondary" onClick={handleDislike} disabled={!email}>
            {isDisliked ? (
              <ThumbDownAltIcon sx={{ color: 'black' }} />
            ) : (
              <ThumbDownAltOutlinedIcon sx={{ color: 'black' }} />
            )}
          </IconButton>
          <Typography variant="body2">{dislikes}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
