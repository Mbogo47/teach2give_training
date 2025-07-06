import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import tripTypes, { TripType } from "./TripsData";

const TripTypes = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Trip Packages
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
        }}
      >
        {tripTypes.map((trip: TripType, index: number) => (
          <Card
            key={index}
            sx={{
              width: 300,
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <CardMedia
              component="img"
              height="180"
              image={trip.images[0]}
              alt={trip.title}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {trip.title}
              </Typography>
              <Typography variant="body2">{trip.description}</Typography>
              <Typography color="secondary" sx={{ mt: 1 }}>
                {trip.price}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default TripTypes;
