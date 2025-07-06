import { Box, Grid, Typography, Container } from "@mui/material";
import DestinationsCard from "../components/Destinations/DestinationsCard";
import destinationsData from "../components/Destinations/Destinations";

const Destinations = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Typography
          variant="h4"
          textAlign="center"
          color="secondary.dark"
          gutterBottom
        >
          Explore Our Destinations
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mb: 5 }}>
          Discover breathtaking places with Zaph Tours – perfect for solo and group travelers.
        </Typography>
        <Grid container spacing={4} sx={{display:"flex", justifyContent:"center"}}>
          {destinationsData.map((dest) => (
            <Grid item xs={12} sm={6} md={4} key={dest.id}>
              <DestinationsCard destination={dest} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Destinations;
