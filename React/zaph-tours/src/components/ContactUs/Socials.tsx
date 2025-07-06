import { Box, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Title from "../Title"

const Socials = () => (
  <Box sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 2 }}>
    <Title title="Socials" />
    <IconButton href="#" target="_blank" color="primary">
      <Facebook sx={{ fontSize: 60 }} />
    </IconButton>
    <IconButton href="#" target="_blank" color="primary">
      <Twitter sx={{ fontSize: 60 }} />
    </IconButton>
    <IconButton href="#" target="_blank" color="primary">
      <Instagram sx={{ fontSize: 60 }} />
    </IconButton>
  </Box>
);

export default Socials;
