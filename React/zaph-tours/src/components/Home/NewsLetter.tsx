import {
  Card,
  CardContent,
  Typography,
  Box,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import Title from "../Title";

const NewsLetter = () => {
  return (
    <Box py={4}>
      <Card sx={{ maxWidth: 700, mx: "auto", p: 3 }}>
        <CardContent>
          <Box component="form">
            <Title title=" Newsletter" />
            <Typography variant="h4" textAlign="center" sx={{ mb: 3 }}>
              Stay up to date with our latest trips and prices
            </Typography>

            <Stack spacing={2}>
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                required
                fullWidth
              />
              <Button
                variant="contained"
                type="submit"
                color="secondary"
                fullWidth
              >
                Subscribe
              </Button>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default NewsLetter;
