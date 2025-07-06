import { Box, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        textAlign: "center",
        backgroundColor: "secondary.dark",
        color: "white",
        mt: 4,
      }}
    >
      <Typography
        variant="body2"
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={1}
      >
        Designed with <FavoriteIcon fontSize="small" color="error" /> by Ivy
        Mbogo &copy; {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;
