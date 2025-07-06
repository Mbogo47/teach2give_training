import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import { Destination } from "./Destinations";

type Props = {
  destination: Destination;
};

const DestinationsCard = ({ destination }: Props) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "100%",
        width: "300px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={destination.image}
        alt={destination.name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          {destination.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {destination.description}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">
            Group Price: {destination.groupPrice}
          </Typography>
          <Typography variant="body2">
            Individual Price: {destination.individualPrice}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" href={destination.link} color="secondary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default DestinationsCard;
