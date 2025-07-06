// src/pages/TripTypesPage.tsx

import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import tripTypes, { TripType } from "./TripsData";

const TripTypes = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Grid
        container
        spacing={4}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {tripTypes.map((trip: TripType, index: number) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: "100%", width: "300px" }}>
              <CardMedia
                component="img"
                height="200"
                image={trip.images[0]}
                alt={trip.title}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {trip.title}
                </Typography>
                <Typography variant="body2">{trip.description}</Typography>
                <Typography sx={{ mt: 1 }} color="secondary.dark">
                  {trip.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TripTypes;
