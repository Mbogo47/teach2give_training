import { Box, Typography, Container } from "@mui/material";
import DestinationsCard from "../components/Destinations/DestinationsCard";
import destinationsData from "../components/Destinations/Destinations";
import Title from "../components/Title";

const Destinations = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Title title="Explore Our Destinations" />
        <Typography variant="body1" textAlign="center" sx={{ mb: 5 }}>
          Discover breathtaking places with Zaph Tours – perfect for solo and
          group travelers.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {destinationsData.map((dest) => (
            <Box key={dest.id} sx={{ width: 300 }}>
              <DestinationsCard destination={dest} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Destinations;
