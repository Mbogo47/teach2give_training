import { Box, Typography, Card, CardContent, Stack } from "@mui/material";
import Title from "../Title";

const OfficeHours = () => (
  <Box sx={{ mt: 4, backgroundColor: "#fff" }}>
    <Title title="Office Hours" />
    <Stack
      direction={{ xs: "row" }}
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      <Card>
        <CardContent>
          <Typography textAlign="center" fontWeight="500" fontSize="1.8rem">
            Mon - Fri: <br />
            8:00 AM – 5:00 PM
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography textAlign="center" fontWeight="500" fontSize="1.8rem">
            Sat:
            <br /> 9:00 AM – 1:00 PM
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography textAlign="center" fontWeight="500" fontSize="1.8rem">
            Sun & Holidays: <br />
            Closed
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  </Box>
);

export default OfficeHours;
