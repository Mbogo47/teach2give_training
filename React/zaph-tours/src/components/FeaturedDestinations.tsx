import { Box, Typography, Container, Grid } from "@mui/material";

const destinations = [
  {
    name: "Mt Kenya",
    price: "$28",
    image: "/hero.jpg",
    description: "A UNESCO World Heritage Site with stunning biodiversity.",
  },
  {
    name: "Mt Kilimanjaro",
    price: "$28",
    image: "/hero.jpg",
    description: "A UNESCO World Heritage Site with stunning biodiversity.",
  },
  {
    name: "Mt Elgon",
    price: "$28",
    image: "/hero.jpg",
    description: "A UNESCO World Heritage Site with stunning biodiversity.",
  },
  {
    name: "Mt Ruwenzori",
    price: "$28",
    image: "/hero.jpg",
    description: "A UNESCO World Heritage Site with stunning biodiversity.",
  },
  {
    name: "Mt Kenya",
    price: "$28",
    image: "/hero.jpg",
    description: "A UNESCO World Heritage Site with stunning biodiversity.",
  },
  {
    name: "Mt Kenya",
    price: "$28",
    image: "/hero.jpg",
    description: "A UNESCO World Heritage Site with stunning biodiversity.",
  },
];

const FeaturedDestinations = () => {
  return (
    <Box py={4} sx={{ backgroundColor: "#fff" }}>
      <Container>
        <Typography
          variant="h4"
          textAlign="center"
          color="secondary.dark"
          sx={{ mb: 4 }}
        >
          Featured Destinations
        </Typography>
        <Grid
          container
          spacing={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {destinations.map((dest, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box textAlign="center">
                <img
                  src={dest.image}
                  alt={dest.name}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                />
                <Typography variant="h6" mt={1}>
                  {dest.name}
                </Typography>
                <Typography color="text.secondary">{dest.price}</Typography>
                <Typography
                  variant="body2"
                  color="primary.main"
                  mt={0.5}
                  fontSize="1.2rem"
                >
                  {dest.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedDestinations;
